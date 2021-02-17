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
  const actualTranslate =
    curr * -width + translate > 0
      ? 0
      : curr * -width + translate <= (slideCount - 1) * -width
      ? curr * -width
      : curr * -width + translate;

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
