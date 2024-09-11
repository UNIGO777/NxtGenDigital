import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import lottie from 'lottie-web';

const Player = forwardRef(({ src, className, ...props }, ref) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: src,
    });

    return () => {
      animationInstance.current.destroy();
    };
  }, [src]);

  useImperativeHandle(ref, () => ({
    playSegments: (segments, forceFlag) => {
      animationInstance.current.playSegments(segments, forceFlag);
    },
    reset: () => {
      animationInstance.current.goToAndStop(0, true);
    },
  }));

  return (
    <div className={`flex justify-center items-center ${className}`} {...props}>
      <div ref={animationContainer}></div>
    </div>
  );
});

export default Player;