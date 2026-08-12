/* BeforeAfterCarousel — one draggable before/after slider with prev/next
   arrows that step through a list of projects, each with a title + subtitle.
   The slider is inlined here (not re-imported) since .jsx modules in this
   runtime don't cross-import each other. */
const { useState, useRef, useCallback } = React;

function Slider({ before, after }) {
  const hostRef = useRef(null);
  const [pct, setPct] = useState(25);
  const dragging = useRef(false);

  const update = useCallback((clientX) => {
    const el = hostRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPct(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onDown = (e) => { dragging.current = true; update(e.clientX); e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId); };
  const onMove = (e) => { if (dragging.current) update(e.clientX); };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={hostRef}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 16, cursor: 'ew-resize', userSelect: 'none', touchAction: 'none', background: '#E8E1D5' }}
    >
      <img src={before} alt="施工前" draggable="false" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 0 0 ' + pct + '%)' }}>
        <img src={after} alt="完工后" draggable="false" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <span style={{ position: 'absolute', left: 14, top: 14, padding: '5px 12px', borderRadius: 999, background: 'rgba(42,41,38,.55)', color: '#F8F6F2', font: '500 13px/1.4 "Manrope",sans-serif', letterSpacing: '.08em', pointerEvents: 'none' }}>施工前</span>
      <span style={{ position: 'absolute', right: 14, top: 14, padding: '5px 12px', borderRadius: 999, background: 'rgba(42,41,38,.55)', color: '#F8F6F2', font: '500 13px/1.4 "Manrope",sans-serif', letterSpacing: '.08em', pointerEvents: 'none' }}>完工后</span>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: pct + '%', width: 2, background: '#F8F6F2', transform: 'translateX(-1px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: pct + '%', width: 40, height: 40, borderRadius: 999, background: '#F8F6F2', transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(42,41,38,.28)', pointerEvents: 'none' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B3936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg>
      </div>
    </div>
  );
}

function BeforeAfterCarousel({ items = [], onViewAll }) {
  const [i, setI] = useState(0);
  const [anim, setAnim] = useState(null);
  const count = items.length || 1;
  const cur = items[i] || {};
  const go = (d) => {
    setAnim(d > 0 ? 'next' : 'prev');
    setI((n) => ((n + d) % count + count) % count);
    setTimeout(() => setAnim(null), 380);
  };
  const jump = (n) => { setAnim(n > i ? 'next' : 'prev'); setI(n); setTimeout(() => setAnim(null), 380); };

  const arrowStyle = {
    width: 44, height: 44, borderRadius: 999, border: '1px solid #3B3936',
    background: '#F8F6F2', display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flex: '0 0 auto',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ font: '500 17px/1.4 "Manrope",sans-serif', letterSpacing: '.16em', color: '#8B8478' }}>看看我们的杰作</span>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{
            margin: 0, font: '700 clamp(30px,4vw,48px)/1.2 "Manrope",sans-serif', letterSpacing: '-0.02em', color: '#2A2926',
            opacity: anim ? 0 : 1, transform: anim === 'next' ? 'translateY(6px)' : anim === 'prev' ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'opacity 320ms cubic-bezier(.2,.6,.3,1), transform 320ms cubic-bezier(.2,.6,.3,1)',
          }}>{cur.title}</h2>
          <div onClick={onViewAll} style={{ cursor: 'pointer', font: '500 15px/1.4 "Manrope",sans-serif', color: '#3B3936', whiteSpace: 'nowrap', borderBottom: '1px solid #3B3936', paddingBottom: 2 }}>查看所有项目 →</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, minHeight: 0 }}>
        <div onClick={() => go(-1)} style={arrowStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B3936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
        </div>
        <div style={{ position: 'relative', flex: 1, height: '100%', overflow: 'hidden', borderRadius: 16 }}>
          <div style={{
            position: 'absolute', inset: 0,
            opacity: anim ? 0 : 1,
            transform: anim === 'next' ? 'scale(1.03)' : anim === 'prev' ? 'scale(0.97)' : 'scale(1)',
            transition: 'opacity 320ms cubic-bezier(.2,.6,.3,1), transform 380ms cubic-bezier(.2,.6,.3,1)',
          }}>
            <Slider before={cur.beforeSrc} after={cur.afterSrc} />
          </div>
        </div>
        <div onClick={() => go(1)} style={arrowStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B3936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {items.map((_, n) => (
          <span key={n} onClick={() => jump(n)} style={{
            width: n === i ? 22 : 8, height: 8, borderRadius: 999, cursor: 'pointer',
            background: n === i ? '#3B3936' : '#DDD6C9', transition: 'width 320ms cubic-bezier(.2,.6,.3,1), background 320ms cubic-bezier(.2,.6,.3,1)',
          }} />
        ))}
      </div>
    </div>
  );
}

window.BeforeAfterCarousel = BeforeAfterCarousel;
module.exports = { BeforeAfterCarousel };
