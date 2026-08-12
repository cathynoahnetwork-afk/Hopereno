/* AccordionGallery — expanding image panels (React Bits pattern), adapted:
   React from global, no gsap (CSS transitions on the DS easing curve), inline styles,
   image-slot panels so photos can be dropped in. */
const { useRef, useState, useEffect } = React;

function AccordionGallery({
  items = [],
  defaultIndex = 0,
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.42,
  overlayColor = 'rgba(42,41,38,',
  textColor = '#F8F6F2',
  accentColor = '#F8F6F2',
  trigger = 'hover',
  duration = 320,
  onItemClick,
}) {
  const rootRef = useRef(null);
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), Math.max(items.length - 1, 0)));
  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const measure = () => setVertical(el.getBoundingClientRect().width < 620);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const count = items.length || 1;
  const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
  const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
  const ease = 'cubic-bezier(.2,.6,.3,1)';

  return (
    <div
      ref={rootRef}
      role="list"
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        gap: gap,
        width: '100%',
        height: vertical ? Math.round(height * 1.5) : height,
      }}
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <div
            key={item.label + i}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            onMouseEnter={() => { if (trigger === 'hover') setActive(i); }}
            onFocus={() => setActive(i)}
            onClick={() => { setActive(i); if (onItemClick) onItemClick(i, item.label); }}
            style={{
              position: 'relative',
              flex: '1 1 0',
              flexGrow: isActive ? grow : 1,
              minWidth: 0,
              minHeight: vertical ? 72 : 0,
              overflow: 'hidden',
              borderRadius: radius,
              cursor: 'pointer',
              outline: 'none',
              background: '#E8E1D5',
              transition: 'flex-grow ' + duration + 'ms ' + ease,
            }}
          >
            <div style={{ position: 'absolute', inset: 0, filter: isActive ? 'saturate(1)' : 'grayscale(1)', transition: 'filter ' + duration + 'ms ' + ease }}>
              {React.createElement('image-slot', {
                id: item.slotId,
                shape: 'rect',
                src: item.src || undefined,
                placeholder: item.placeholder || item.label,
              })}
            </div>
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: !vertical && !isActive
                ? overlayColor + '.34)'
                : 'linear-gradient(180deg, ' + overlayColor + '0) 45%, ' + overlayColor + (isActive ? '.62' : '.72') + ') 100%)',
              transition: 'background ' + duration + 'ms ' + ease,
            }} />
            <div style={{
              position: 'absolute', zIndex: 2,
              display: 'flex', gap: !vertical && !isActive ? 0 : 12, pointerEvents: 'none',
              writingMode: !vertical && !isActive ? 'vertical-rl' : 'horizontal-tb',
              ...(!vertical && !isActive
                ? { inset: 0, justifyContent: 'center', alignItems: 'center' }
                : { left: 20, right: 20, bottom: 24, alignItems: vertical ? 'center' : 'flex-end' }),
            }}>
            {isActive ? (
              <span style={{
                flex: '0 0 auto', width: 3, height: 40, borderRadius: 3,
                background: accentColor,
                transition: 'opacity ' + duration + 'ms ' + ease,
              }} />
            ) : null}
              <span style={{
                color: textColor, fontWeight: 700,
                fontSize: isActive ? (item.label.length > 10 ? 22 : item.label.length > 7 ? 27 : 32) : 26,
                lineHeight: 1.25,
                letterSpacing: !vertical && !isActive ? '0.22em' : '-0.01em',
                whiteSpace: 'nowrap',
                maxWidth: 'none',
                textWrap: 'balance',
                textShadow: !vertical && !isActive ? '0 1px 12px rgba(42,41,38,.55)' : 'none',
                transition: 'font-size ' + duration + 'ms ' + ease,
              }}>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

window.AccordionGallery = AccordionGallery;
module.exports = { AccordionGallery };
