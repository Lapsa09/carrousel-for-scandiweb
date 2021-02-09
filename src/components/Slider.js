/** @jsx jsx */
import { useEffect, useRef, useState } from "react";
import { css, jsx } from "@emotion/react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Dots from "./Dots";
import Arrow from "./Arrow";

const getWidth = () => window.innerWidth;

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

  const firstSlide = children[0];
  const secondSlide = children[1];
  const lastSlide = children[children.length - 1];

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, activeIndex } = state;

  const transitionRef = useRef();

  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  const smoothTransition = () => {
    let _slides = [];

    if (activeIndex === children.length - 1)
      _slides = [children[children.length - 2], lastSlide, firstSlide];
    else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate:
        activeIndex === children.length - 1
          ? 0
          : (activeIndex + 1) *
            (window.innerWidth > width ? width : window.innerWidth),
      activeIndex: activeIndex === children.length - 1 ? 0 : activeIndex + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate:
        activeIndex === 0
          ? (children.length - 1) *
            (window.innerWidth > width ? width : window.innerWidth)
          : (activeIndex - 1) *
            (window.innerWidth > width ? width : window.innerWidth),
      activeIndex: activeIndex === 0 ? children.length - 1 : activeIndex - 1,
    });
  };

  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startedDragging, setStartedDragging] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleMouseStart = (e) => {
    setMouseStart(e.clientX);
    setStartedDragging(true);
  };

  const handleMouseMove = (e) => {
    if (startedDragging) {
      setDragging(true);
      setMouseEnd(e.clientX);
      setState({
        ...state,
        translate:
          mouseStart -
          mouseEnd +
          activeIndex * (window.innerWidth > width ? width : window.innerWidth),
      });
    }
  };

  const handleMouseEnd = () => {
    setStartedDragging(false);
    if (dragging) {
      setDragging(false);
      if (mouseStart - mouseEnd > 150) {
        nextSlide();
      } else if (mouseStart - mouseEnd < -150) {
        prevSlide();
      } else {
        setState({
          ...state,
          translate: activeIndex * width,
        });
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setStartedDragging(true);
  };

  const handleTouchMove = (e) => {
    if (startedDragging) {
      setDragging(true);
      setTouchEnd(e.targetTouches[0].clientX);
      setState({
        ...state,
        translate:
          touchStart -
          touchEnd +
          activeIndex * (window.innerWidth > width ? width : window.innerWidth),
      });
    }
  };

  const handletouchEnd = () => {
    setStartedDragging(false);
    if (dragging) {
      setDragging(false);
      if (touchStart - touchEnd > 150) {
        nextSlide();
      } else if (touchStart - touchEnd < -150) {
        prevSlide();
      } else {
        setState({
          ...state,
          translate: activeIndex * width,
        });
      }
    }
  };

  return (
    <div css={SliderCss}>
      <SliderContent
        translate={translate}
        transition={transition}
        maxWidth={width * children.length}
        onMouseDown={(e) => handleMouseStart(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={() => handleMouseEnd()}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={() => handletouchEnd()}
      >
        {children.map((slide, idx) => (
          <Slide key={idx} width={width}>
            {slide}
          </Slide>
        ))}
      </SliderContent>
      {showArrows && <Arrow direction="left" handleClick={prevSlide} />}
      {showArrows && <Arrow direction="right" handleClick={nextSlide} />}

      {showDots && (
        <Dots
          slides={children}
          activeIndex={activeIndex}
          setState={setState}
          state={state}
          width={width}
        />
      )}
    </div>
  );
}

export default Slider;
