/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Slide = ({ children, width }) => {
  const style = css`
    height: 100%;
    width: 100vw;
    max-width: ${width}px;
    user-select: none;
    img {
      pointer-events: none;
    }
  `;

  return <div css={style}>{children}</div>;
};

export default Slide;
