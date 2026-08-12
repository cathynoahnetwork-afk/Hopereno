/* HammerCursor — a hammer sprite that replaces the pointer over interactive
   elements, swings on click, and throws a small wood-chip spatter at the
   impact point. Falls back silently on touch devices. */
const { useEffect, useRef, useState } = React;

function HammerCursor({
  src = 'images/cursor-hammer.png',
  size = 32,
  selector = 'a,button,[role="button"],[data-hammer],[style*="cursor:pointer"],[style*="cursor: pointer"]',
  chipColors = ['#4A321E', '#8A633C', '#3B3936'],
}) {
  const spriteRef = useRef(null);
  const [active, setActive] = useState(false);
  const [chips, setChips] = useState([]);
  const swingUntil = useRef(0);
  const seq = useRef(0);
  const pos = useRef({ x: -200, y: -200 });
  const timers = useRef([]);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(hover:none)').matches) return;

    const style = document.createElement('style');
    style.textContent =
      '.hm-on, .hm-on * { cursor:none !important; }' +
      '@keyframes hmSwing{0%{transform:rotate(0deg)}30%{transform:rotate(-22deg)}46%{transform:rotate(12deg)}58%{transform:rotate(6deg)}100%{transform:rotate(0deg)}}';
    document.head.appendChild(style);

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = spriteRef.current;
      if (el) el.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
      const hit = e.target && e.target.closest ? e.target.closest(selector) : null;
      setActive(!!hit);
      document.body.classList.toggle('hm-on', !!hit);
    };

    const onDown = (e) => {
      const hit = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (!hit) return;
      const head = spriteRef.current && spriteRef.current.firstChild;
      if (head) {
        head.style.animation = 'none';
        void head.offsetWidth;
        head.style.animation = 'hmSwing 420ms cubic-bezier(.3,.7,.4,1)';
      }
      swingUntil.current = Date.now() + 420;
      // Spatter fires at the moment of impact, from the hammer head.
      const t = setTimeout(() => {
        const id = ++seq.current;
        const burst = Array.from({ length: 7 }, (_, i) => {
          const a = -Math.PI / 2 + (Math.random() - 0.5) * 1.7;
          const d = 10 + Math.random() * 15;
          return {
            k: id + '-' + i,
            dx: Math.cos(a) * d,
            dy: Math.sin(a) * d,
            s: 2 + Math.random() * 2.5,
            c: chipColors[i % chipColors.length],
          };
        });
        setChips((prev) => prev.concat({ id, x: pos.current.x, y: pos.current.y, burst, on: false }));
        const t2 = setTimeout(() => setChips((l) => l.map((c) => (c.id === id ? { ...c, on: true } : c))), 20);
        const t3 = setTimeout(() => setChips((l) => l.filter((c) => c.id !== id)), 720);
        timers.current.push(t2, t3);
      }, 190);
      timers.current.push(t);
    };

    window.addEventListener('mousemove', onMove, true);
    window.addEventListener('mousedown', onDown, true);
    return () => {
      window.removeEventListener('mousemove', onMove, true);
      window.removeEventListener('mousedown', onDown, true);
      document.body.classList.remove('hm-on');
      style.remove();
      timers.current.forEach(clearTimeout);
    };
  }, [selector]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
      <div ref={spriteRef} style={{ position: 'fixed', top: 0, left: 0, willChange: 'transform' }}>
        <img
          src={src}
          alt=""
          style={{
            width: size, height: size, display: 'block',
            transformOrigin: '82% 84%',
            marginLeft: -size * 0.14, marginTop: -size * 0.1,
            opacity: active ? 1 : 0,
            transition: 'opacity 120ms cubic-bezier(.2,.6,.3,1)',
            filter: 'drop-shadow(0 1px 3px rgba(59,57,54,.22))',
          }}
        />
      </div>
      {chips.map((c) => (
        <div key={c.id} style={{ position: 'fixed', left: c.x, top: c.y, width: 0, height: 0 }}>
          {c.burst.map((b) => (
            <span key={b.k} style={{
              position: 'absolute', width: b.s, height: b.s, borderRadius: 1,
              background: b.c,
              opacity: c.on ? 0 : 1,
              transform: c.on
                ? 'translate3d(' + b.dx + 'px,' + (b.dy + 16) + 'px,0) rotate(90deg)'
                : 'translate3d(0,0,0)',
              transition: 'transform 620ms cubic-bezier(.2,.6,.3,1), opacity 620ms cubic-bezier(.2,.6,.3,1)',
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}

window.HammerCursor = HammerCursor;
module.exports = { HammerCursor };
