/* PhotoCarousel — small swipeable/clickable photo strip with dot pagination.
   Drag horizontally or click a dot to change image. */
const { useRef, useState } = React;

function PhotoCarousel({
  images = [],
  radius = 16,
  aspect = '4 / 3',
  dotColor = '#DDD6C9',
  dotActive = '#3B3936',
  duration = 420,
}) {
  const [i, setI] = useState(0);
  const [drag, setDrag] = useState(0);
  const start = useRef(null);
  const count = images.length || 1;
  const ease = 'cubic-bezier(.2,.6,.3,1)';

  const go = (n) => setI(((n % count) + count) % count);

  const onDown = (e) => {
    start.current = { x: e.clientX, w: e.currentTarget.clientWidth };
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!start.current) return;
    setDrag(e.clientX - start.current.x);
  };
  const onUp = () => {
    if (!start.current) return;
    const th = Math.max(40, start.current.w * 0.12);
    if (drag <= -th) go(i + 1);
    else if (drag >= th) go(i - 1);
    start.current = null;
    setDrag(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', height: '100%' }}>
      <div
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        style={{
          position: 'relative', width: '100%', aspectRatio: aspect, overflow: 'hidden',
          borderRadius: radius, background: '#E8E1D5', touchAction: 'pan-y',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', width: count * 100 + '%', height: '100%',
          transform: 'translateX(calc(' + (-i * (100 / count)) + '% + ' + drag + 'px))',
          transition: start.current ? 'none' : 'transform ' + duration + 'ms ' + ease,
        }}>
          {images.map((src, n) => (
            <div key={src + n} style={{ width: 100 / count + '%', height: '100%', flex: '0 0 auto' }}>
              <img src={src} alt="" draggable="false" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', userSelect: 'none' }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {images.map((_, n) => (
          <span
            key={n}
            onClick={() => go(n)}
            role="button"
            aria-label={'第 ' + (n + 1) + ' 张'}
            style={{
              width: n === i ? 26 : 9, height: 9, borderRadius: 999, cursor: 'pointer',
              background: n === i ? dotActive : dotColor,
              transition: 'width ' + duration + 'ms ' + ease + ', background ' + duration + 'ms ' + ease,
            }}
          />
        ))}
      </div>
    </div>
  );
}

window.PhotoCarousel = PhotoCarousel;
module.exports = { PhotoCarousel };
