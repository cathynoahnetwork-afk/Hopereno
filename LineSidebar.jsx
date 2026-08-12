/* LineSidebar (React Bits) — adapted: React from global, inline styles, controlled active index. */
const { useRef, useState, useCallback, useEffect } = React;

const FALLOFF_CURVES = {
  linear: (p) => p,
  smooth: (p) => p * p * (3 - 2 * p),
  sharp: (p) => p * p * p,
};

function LineSidebar({
  items = [],
  accentColor = '#3B3936',
  textColor = '#8B8478',
  markerColor = '#DDD6C9',
  showIndex = true,
  showMarker = true,
  proximityRadius = 100,
  maxShift = 14,
  falloff = 'smooth',
  markerLength = 44,
  markerGap = 12,
  tickScale = 0.5,
  scaleTick = true,
  itemGap = 20,
  fontSize = 14,
  smoothing = 120,
  active = null,
  onItemClick,
}) {
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const targetsRef = useRef([]);
  const currentRef = useRef([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);
  const activeRef = useRef(active);
  const smoothingRef = useRef(smoothing);
  const [internalActive, setInternalActive] = useState(active);

  const activeIndex = active == null ? internalActive : active;
  activeRef.current = activeIndex;
  smoothingRef.current = smoothing;

  const runFrame = useCallback((now) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const tau = Math.max(smoothingRef.current, 1) / 1000;
    const k = 1 - Math.exp(-dt / tau);
    let moving = false;
    const els = itemRefs.current;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!el) continue;
      const target = Math.max(targetsRef.current[i] || 0, activeRef.current === i ? 1 : 0);
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      currentRef.current[i] = value;
      el.style.setProperty('--effect', value.toFixed(4));
      if (!settled) moving = true;
    }
    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  const handlePointerMove = useCallback((e) => {
    const list = listRef.current;
    if (!list) return;
    const rect = list.getBoundingClientRect();
    const pointerY = e.clientY - rect.top;
    const ease = FALLOFF_CURVES[falloff] || FALLOFF_CURVES.linear;
    const els = itemRefs.current;
    // Only the single nearest item within the proximity radius reacts.
    let nearest = -1;
    let nearestDist = Infinity;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!el) continue;
      const center = el.offsetTop + el.offsetHeight / 2;
      const d = Math.abs(pointerY - center);
      if (d < nearestDist) { nearestDist = d; nearest = i; }
    }
    for (let i = 0; i < els.length; i++) targetsRef.current[i] = 0;
    if (nearest >= 0 && nearestDist <= proximityRadius) {
      targetsRef.current[nearest] = ease(Math.max(0, 1 - nearestDist / proximityRadius));
    }
    startLoop();
  }, [falloff, proximityRadius, startLoop]);

  const handlePointerLeave = useCallback(() => {
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  useEffect(() => { startLoop(); }, [activeIndex, startLoop, items.length]);
  useEffect(() => () => { if (rafRef.current != null) cancelAnimationFrame(rafRef.current); rafRef.current = null; }, []);

  const labelColor = 'color-mix(in srgb, ' + accentColor + ' calc(var(--effect, 0) * 100%), ' + textColor + ')';
  const lineColor = 'color-mix(in srgb, ' + accentColor + ' calc(var(--effect, 0) * 100%), ' + markerColor + ')';

  return (
    <nav style={{ position: 'relative', display: 'flex', paddingLeft: showMarker ? markerLength + markerGap : 0 }}>
      <ul
        ref={listRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ listStyle: 'none', margin: 0, padding: '8px 0', display: 'flex', flexDirection: 'column', gap: itemGap }}
      >
        {items.map((label, index) => (
          <li
            key={label + index}
            ref={(el) => { itemRefs.current[index] = el; }}
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={() => { setInternalActive(index); if (onItemClick) onItemClick(index, label); }}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            {showMarker ? (
              <span aria-hidden="true" style={{
                position: 'absolute', top: '50%', left: -(markerLength + markerGap), height: 1, width: markerLength,
                backgroundColor: lineColor, transformOrigin: 'left center',
                transform: 'translateY(-50%) scaleX(calc(0.7 + var(--effect, 0) * 0.5))',
              }} />
            ) : null}
            {showMarker && index !== items.length - 1 ? (
              <span aria-hidden="true" style={{
                position: 'absolute', top: 'calc(100% + ' + itemGap / 2 + 'px)', left: -(markerLength + markerGap),
                height: 1, width: markerLength * tickScale, backgroundColor: markerColor, opacity: 0.6,
                transformOrigin: 'left center',
                transform: scaleTick ? 'translateY(-50%) scaleX(calc(0.7 + var(--effect, 0) * 0.6))' : 'translateY(-50%)',
              }} />
            ) : null}
            <span style={{
              position: 'relative', display: 'inline-flex', alignItems: 'baseline', fontSize: fontSize,
              lineHeight: 1.2, color: labelColor, whiteSpace: 'nowrap',
              transform: 'translateX(calc(var(--effect, 0) * ' + maxShift + 'px))',
            }}>
              {showIndex ? (
                <span style={{ marginRight: '0.6em', fontSize: '0.85em', letterSpacing: '0.08em', opacity: 'calc(0.55 + var(--effect, 0) * 0.45)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              ) : null}
              <span>{label}</span>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

window.LineSidebar = LineSidebar;
module.exports = { LineSidebar };
