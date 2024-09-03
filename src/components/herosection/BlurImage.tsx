import * as React from 'react';
import clsx from 'clsx';

interface BlurImageProps {
  img: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
}

const BlurImage: React.FC<BlurImageProps> = ({ img, ...rest }) => {
  const [visible, setVisible] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const { src, srcSet, sizes } = img.props;

  React.useLayoutEffect(() => {
    if (imgRef.current?.complete) setVisible(true);
  }, []);

  React.useEffect(() => {
    if (!imgRef.current) return;
    if (imgRef.current.complete) return;

    let current = true;
    imgRef.current.addEventListener('load', () => {
      if (!imgRef.current || !current) return;
      setTimeout(() => {
        setVisible(true);
      }, 950);
    });

    return () => {
      current = false;
    };
  }, [src, srcSet, sizes]);

  const imgEl = React.cloneElement(img, {
    ref: imgRef,
    key: img.props.src,
    className: clsx(
      img.props.className,
      'w-full h-full object-cover transition-opacity',
      {
        'opacity-0': !visible,
      }
    ),
  });

  return (
    <>
      <div
        className={clsx(rest.className, 'w-2/3 h-70')}
        style={
          visible === false
            ? {
                ...rest.style,
                backgroundSize: 'cover',
                backgroundColor: 'rgba(232, 74, 148, 0.8)',
                filter: `blur(3px)`,
              }
            : rest.style
        }
      >
        {imgEl}
      </div>
    </>
  );
};

export default BlurImage;
