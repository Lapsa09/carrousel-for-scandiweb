/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import LeftArrow from "./img/LeftArrow";
import RightArrow from "./img/RightArrow";

function Arrow({ direction, handleClick }) {
  const style = css`
    display: flex;
    position: absolute;
    top: 50%;
    ${direction === "right" ? `right:25px` : `left:25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: black;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    img {
      transform: translateX(${direction === "left" ? "-2" : "2"}px);
      &:focus {
        outline: 0;
      }
    }
  `;
  return (
    <div onClick={handleClick} css={style}>
      {direction === "right" ? <RightArrow /> : <LeftArrow />}
    </div>
  );
}

export default Arrow;
