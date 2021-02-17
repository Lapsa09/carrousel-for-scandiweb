/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Slide = ({
  children,
  curr,
  width,
  height,
  translate,
  transitionDuration = 0.4,
  slideCount,
}) => {
  let actualTranslate = curr * -width + translate;
  if (actualTranslate > 0) actualTranslate = 0;
  else if (actualTranslate <= (slideCount - 1) * -width)
    actualTranslate = curr * -width;

  const style = css`
    height: 100%;
    flex: 0 0 ${width}px;
    max-width: ${width}px;
    max-height: ${height}px;
    transform: translateX(${actualTranslate}px);
    transition: transform ${transitionDuration}s ease;
    user-select: none;
    img {
      pointer-events: none;
    }
  `;

  return <div css={style}>{children}</div>;
};

export default Slide;
