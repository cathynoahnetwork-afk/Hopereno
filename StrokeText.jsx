/* StrokeText (React Bits, adapted) — no gsap / no CSS file: the draw and the
   fill wipe run on CSS transitions along the design system's easing curve.
   Renders the wordmark as measured SVG glyphs so the outline can draw on. */
const { useEffect, useLayoutEffect, useMemo, useRef, useState } = React;

let uid = 0;

function StrokeText({
  text = 'Hopereno',
  strokeColor = '#F8F6F2',
  fillColor = '#F8F6F2',
  strokeWidth = 1.2,
  drawDuration = 1.1,
  fillDelay = 0.12,
  stagger = 0.05,
  ease = 'cubic-bezier(.2,.6,.3,1)',
  fillMode = 'wipe',
  fontSize = 128,
  fontWeight = 700,
  letterSpacing = -2,
  fontFamily = '"Manrope","Noto Sans SC",sans-serif',
  play = true,
  style,
}) {
  const strokeRef = useRef(null);
  const [box, setBox] = useState(null);
  const [on, setOn] = useState(false);
  const wipeId = useMemo(() => 'st-wipe-' + ++uid, []);
  const chars = useMemo(() => Array.from(String(text || '')), [text]);
  const dash = Math.max(fontSize * 7, 200);

  const fontStyle = {
    fontSize: fontSize + 'px',
    fontWeight,
    letterSpacing: letterSpacing + 'px',
    fontFamily,
  };

  useLayoutEffect(() => {
    let cancelled = false;
    const measure = () => {
      const node = strokeRef.current;
      if (cancelled || !node) return;
      let b;
      try { b = node.getBBox(); } catch (e) { return; }
      if (!b || !b.width) return;
      const pad = Math.max(strokeWidth, fontSize * 0.12);
      setBox({ x: b.x - pad, y: b.y - pad, width: b.width + pad * 2, height: b.height + pad * 2 });
    };
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure).catch(() => {});
    return () => { cancelled = true; };
  }, [chars, fontSize, fontWeight, letterSpacing, strokeWidth]);

  useEffect(() => {
    if (!play || !box) { setOn(false); return; }
    const t = setTimeout(() => setOn(true), 40);
    return () => clearTimeout(t);
  }, [play, box]);

  const viewBox = box
    ? box.x + ' ' + box.y + ' ' + box.width + ' ' + box.height
    : '0 ' + -fontSize + ' 600 ' + fontSize * 1.3;
  const useWipe = fillMode === 'wipe';

  return (
    <span role="img" aria-label={String(text || '')} style={{ display: 'block', width: '100%', lineHeight: 0, ...style }}>
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" aria-hidden="true"
        style={{ display: 'block', width: '100%', height: Math.round(fontSize * 1.3) + 'px', overflow: 'visible' }}>
        {useWipe && box ? (
          <defs>
            <clipPath id={wipeId} clipPathUnits="userSpaceOnUse">
              <rect
                x={box.x} y={box.y} height={box.height}
                width={on ? box.width : 0}
                style={{
                  transition: 'width ' + Math.max(0.4, drawDuration * 0.5) + 's ' + ease + ' ' +
                    (drawDuration + fillDelay) + 's',
                }}
              />
            </clipPath>
          </defs>
        ) : null}

        <text ref={strokeRef} x="0" y="0" fill="none" stroke={strokeColor} strokeWidth={strokeWidth}
          strokeLinejoin="round" strokeLinecap="round" style={{ ...fontStyle, userSelect: 'none' }}>
          {chars.map((c, i) => (
            <tspan key={'s' + i} style={{
              strokeDasharray: dash,
              strokeDashoffset: on ? 0 : dash,
              transition: 'stroke-dashoffset ' + drawDuration + 's ' + ease + ' ' + (i * stagger) + 's',
            }}>{c}</tspan>
          ))}
        </text>

        <text x="0" y="0" fill={fillColor} stroke="none"
          clipPath={useWipe && box ? 'url(#' + wipeId + ')' : undefined}
          style={{
            ...fontStyle, userSelect: 'none',
            opacity: useWipe ? 1 : (on ? 1 : 0),
            transition: useWipe ? undefined
              : 'opacity ' + Math.max(0.4, drawDuration * 0.5) + 's ' + ease + ' ' + (drawDuration + fillDelay) + 's',
          }}>
          {chars.map((c, i) => <tspan key={'f' + i}>{c}</tspan>)}
        </text>
      </svg>
    </span>
  );
}

window.StrokeText = StrokeText;
module.exports = { StrokeText };
