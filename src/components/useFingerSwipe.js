import { useCallback, useEffect, useRef, useState } from "react";

export const useFingerSwipe = (width, onLeft, onRight) => {
  const [translate, setTranslate] = useState(0);

  const xDown = useRef();

  const xDiff = useRef();

  const currWidth = useRef(width);

  const handleTouchStart = (event) => {
    if (getEventName(event) === "touchstart") {
      xDown.current = event.touches[0].clientX;
    } else {
      xDown.current = event.clientX;
    }
  };

  const getEventName = (event) => {
    return event.type;
  };

  const handleMove = (event) => {
    if (!xDown.current) return;

    let xMove;
    if (getEventName(event) === "touchmove") {
      xMove = event.touches[0].clientX;
    } else {
      xMove = event.clientX;
    }

    xDiff.current = xDown.current - xMove;

    const width = currWidth.current;

    if (Math.abs(xDiff.current) > 75) {
      let translateX = xDiff.current;
      translateX =
        translateX >= width
          ? width
          : translateX <= -width
          ? -width
          : translateX;
      setTranslate(-translateX);
    }

    xDiff.current = 0;
  };

  const handleTouchEnd = () => {
    setTranslate((translate) => {
      if (translate >= width / 2) {
        onRight();
      } else if (translate <= -width / 2) {
        onLeft();
      }
      return 0;
    });

    xDown.current = null;
  };

  const handleTouchMove = useCallback(handleMove, []);

  useEffect(() => {
    currWidth.current = width;
  }, [width]);

  return { translate, handleTouchStart, handleTouchMove, handleTouchEnd };
};
