/* MasonryGallery — filterable masonry grid with a centered lightbox.
   React from global, inline styles, CSS-transition stagger (no gsap). */
const { useState, useEffect, useMemo, useRef } = React;

const EASE = 'cubic-bezier(.2,.6,.3,1)';

function MasonryGallery({ items = [], filters = [], accent = '#3B3936', surface = '#F8F6F2' }) {
  const [active, setActive] = useState(filters[0] || '全部');
  const [open, setOpen] = useState(null);
  const [shown, setShown] = useState(false);
  const [cols, setCols] = useState(3);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setCols(w < 560 ? 1 : w < 900 ? 2 : w < 1240 ? 3 : 4);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setShown(false);
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const list = useMemo(
    () => (active === (filters[0] || '全部') ? items : items.filter((i) => i.tag === active)),
    [active, items, filters]
  );

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
        {filters.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                appearance: 'none', cursor: 'pointer', borderRadius: 999,
                padding: '10px 20px', fontSize: 15, fontWeight: 500, letterSpacing: '.02em',
                border: '1px solid ' + (on ? accent : 'rgba(59,57,54,.22)'),
                background: on ? accent : 'transparent',
                color: on ? surface : accent,
                transition: 'background 200ms ' + EASE + ', color 200ms ' + EASE + ', border-color 200ms ' + EASE,
              }}
            >{f}</button>
          );
        })}
      </div>

      <div style={{ columnCount: cols, columnGap: 16 }}>
        {list.map((it, i) => (
          <figure
            key={it.src}
            onClick={() => setOpen(it)}
            style={{
              margin: '0 0 16px', breakInside: 'avoid', cursor: 'pointer',
              borderRadius: 14, overflow: 'hidden', position: 'relative',
              background: '#E8E1D5',
              opacity: shown ? 1 : 0,
              transform: shown ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 520ms ' + EASE + ' ' + Math.min(i * 45, 520) + 'ms, transform 520ms ' + EASE + ' ' + Math.min(i * 45, 520) + 'ms',
            }}
          >
            <img
              src={it.src}
              alt={it.title}
              loading="lazy"
              style={{
                display: 'block', width: '100%', height: 'auto',
                transition: 'transform 520ms ' + EASE + ', filter 320ms ' + EASE,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
            <figcaption style={{
              position: 'absolute', left: 0, right: 0, bottom: 0, padding: '36px 18px 16px',
              pointerEvents: 'none',
              background: 'linear-gradient(180deg, rgba(42,41,38,0) 0%, rgba(42,41,38,.72) 100%)',
              color: surface, fontSize: 16, fontWeight: 600, letterSpacing: '-.01em',
            }}>{it.title}</figcaption>
          </figure>
        ))}
      </div>

      {open ? ReactDOM.createPortal((
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 'clamp(20px,4vw,56px)',
            background: 'rgba(42,41,38,.72)', backdropFilter: 'blur(3px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative', maxWidth: 'min(1040px,100%)', maxHeight: '100%',
              display: 'flex', flexDirection: 'column', gap: 0,
              background: surface, borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(20,19,17,.35)',
            }}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="关闭"
              style={{
                position: 'absolute', top: 14, right: 14, zIndex: 2, width: 40, height: 40,
                borderRadius: 999, border: 'none', cursor: 'pointer',
                background: 'rgba(248,246,242,.92)', color: accent, fontSize: 20, lineHeight: 1,
              }}
            >×</button>
            <img src={open.src} alt={open.title} style={{ display: 'block', width: '100%', maxHeight: '68vh', objectFit: 'cover' }} />
            <div style={{ padding: 'clamp(20px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 14, letterSpacing: '.16em', color: '#8B8478' }}>{open.tag}</span>
              <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: '-.02em', color: accent }}>{open.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: '#5A5751', maxWidth: '62ch' }}>{open.caption}</p>
            </div>
          </div>
        </div>
      ), document.body) : null}
    </div>
  );
}

window.MasonryGallery = MasonryGallery;
module.exports = { MasonryGallery };
