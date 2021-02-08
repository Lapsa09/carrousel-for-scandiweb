/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Slide = ({ content, width }) => {
  const style = css`
    height: 100%;
    width: 100vw;
    max-width: ${width}px;
    background-image: url(${content});
    background-size: min(100vw, ${width}px) 100%;
    background-repeat: no-repeat;
    background-position: start;
  `;

  return <div css={style} />;
};

export default Slide;
