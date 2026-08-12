/* BeforeAfterSlider — single frame, draggable vertical divider: left shows
   "before", right reveals "after" via a clip-path that follows the handle. */
const { useRef, useState, useCallback } = React;

function BeforeAfterSlider({ before, after, initial = 25, radius = 16 }) {
  const hostRef = useRef(null);
  const [pct, setPct] = useState(initial);
  const dragging = useRef(false);

  const update = useCallback((clientX) => {
    const el = hostRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    update(e.clientX);
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => { if (dragging.current) update(e.clientX); };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={hostRef}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      style={{
        position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
        borderRadius: radius, cursor: 'ew-resize', userSelect: 'none', touchAction: 'none',
        background: '#E8E1D5',
      }}
    >
      <img src={before} alt="施工前" draggable="false" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 0 0 ' + pct + '%)' }}>
        <img src={after} alt="完工后" draggable="false" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <span style={{ position: 'absolute', left: 14, top: 14, padding: '5px 12px', borderRadius: 999, background: 'rgba(42,41,38,.55)', color: '#F8F6F2', font: '500 13px/1.4 "Manrope",sans-serif', letterSpacing: '.08em', pointerEvents: 'none' }}>施工前</span>
      <span style={{ position: 'absolute', right: 14, top: 14, padding: '5px 12px', borderRadius: 999, background: 'rgba(42,41,38,.55)', color: '#F8F6F2', font: '500 13px/1.4 "Manrope",sans-serif', letterSpacing: '.08em', pointerEvents: 'none' }}>完工后</span>

      <div style={{ position: 'absolute', top: 0, bottom: 0, left: pct + '%', width: 2, background: '#F8F6F2', transform: 'translateX(-1px)', pointerEvents: 'none' }} />
      <div style={{
        position: 'absolute', top: '50%', left: pct + '%', width: 40, height: 40, borderRadius: 999,
        background: '#F8F6F2', transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 14px rgba(42,41,38,.28)', pointerEvents: 'none',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B3936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
        </svg>
      </div>
    </div>
  );
}

window.BeforeAfterSlider = BeforeAfterSlider;
module.exports = { BeforeAfterSlider };
