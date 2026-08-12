/* TiltedCard (React Bits) — adapted: no motion/npm dependency (spring emulated with
   a rAF critically-damped follower), no CSS file, children instead of imageSrc so it
   can wrap existing card markup. */
const { useRef, useEffect } = React;

function TiltedCard({
  children,
  rotateAmplitude = 12,
  scaleOnHover = 1.04,
  stiffness = 0.12,
  perspective = 900,
  style,
}) {
  const hostRef = useRef(null);
  const innerRef = useRef(null);
  const target = useRef({ rx: 0, ry: 0, s: 1 });
  const cur = useRef({ rx: 0, ry: 0, s: 1 });

  useEffect(() => {
    let raf = null;
    const tick = () => {
      const t = target.current, c = cur.current;
      c.rx += (t.rx - c.rx) * stiffness;
      c.ry += (t.ry - c.ry) * stiffness;
      c.s += (t.s - c.s) * stiffness;
      const el = innerRef.current;
      if (el) {
        el.style.transform =
          'rotateX(' + c.rx.toFixed(3) + 'deg) rotateY(' + c.ry.toFixed(3) + 'deg) scale(' + c.s.toFixed(4) + ')';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stiffness]);

  const onMove = (e) => {
    const host = hostRef.current;
    if (!host) return;
    const r = host.getBoundingClientRect();
    const ox = e.clientX - r.left - r.width / 2;
    const oy = e.clientY - r.top - r.height / 2;
    target.current.rx = (oy / (r.height / 2)) * -rotateAmplitude;
    target.current.ry = (ox / (r.width / 2)) * rotateAmplitude;
  };
  const onEnter = () => { target.current.s = scaleOnHover; };
  const onLeave = () => { target.current = { rx: 0, ry: 0, s: 1 }; };

  return (
    <div
      ref={hostRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ perspective: perspective + 'px', height: '100%', width: '100%', ...style }}
    >
      <div ref={innerRef} style={{ height: '100%', width: '100%', transformStyle: 'preserve-3d', willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}

window.TiltedCard = TiltedCard;
module.exports = { TiltedCard };
