/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import leftArrow from "./img/left-arrow.svg";
import rightArrow from "./img/right-arrow.svg";

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
      {direction === "right" ? (
        <img src={rightArrow} />
      ) : (
        <img src={leftArrow} />
      )}
    </div>
  );
}

export default Arrow;
