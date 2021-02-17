/** @jsx jsx */
import { useRef, useState } from "react";
import { css, jsx } from "@emotion/react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Dots from "./Dots";
import Arrow from "./Arrow";
import { useFingerSwipe } from "./useFingerSwipe";
import { useResize } from "./useResize";

function Slider({
  children,
  width,
  height,
  showArrows = true,
  showDots = true,
}) {
  const SliderCss = css`
    position: relative;
    object-fit: contain;
    height: ${height}px;
    max-width: ${width}px;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
  `;

  const [activeIndex, setActiveIndex] = useState(0);

  const transitionRef = useRef();
  const slideRef = useRef(null);

  const { width: slideWidth } = useResize(slideRef, width);

  const smooth = (e) => {
    if (e.target.className.includes("SliderContent")) {
      transitionRef.current();
    }
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex) => {
      if (activeIndex === children.length - 1) return 0;
      else return activeIndex + 1;
    });
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex) => {
      if (activeIndex === 0) return children.length - 1;
      else return activeIndex - 1;
    });
  };

  const {
    translated,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  } = useFingerSwipe(slideWidth, nextSlide, prevSlide);

  return (
    <div css={SliderCss} onTransitionEnd={smooth} ref={slideRef}>
      <SliderContent
        maxWidth={width * children.length}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.length > 1 ? (
          children.map((slide, idx) => (
            <Slide
              key={idx}
              translate={translated}
              width={slideWidth}
              slideCount={children.length}
              curr={activeIndex}
            >
              {slide}
            </Slide>
          ))
        ) : (
          <Slide
            key={0}
            translate={translated}
            width={slideWidth}
            slideCount={1}
            curr={0}
          >
            {children}
          </Slide>
        )}
      </SliderContent>
      {showArrows && <Arrow direction="left" handleClick={prevSlide} />}
      {showArrows && <Arrow direction="right" handleClick={nextSlide} />}

      {showDots && (
        <Dots
          slides={children}
          activeIndex={activeIndex}
          setState={setActiveIndex}
        />
      )}
    </div>
  );
}

export default Slider;
