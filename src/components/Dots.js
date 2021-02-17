/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Dot = ({ active, onClick }) => {
  const style = css`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${active ? "black" : "white"};
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  `;
  return <span css={style} onClick={onClick} />;
};

function Dots({ slides, activeIndex, setState }) {
  const style = css`
    position: absolute;
    padding: 2px;
    height: 30px;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 30%;
    overflow-x: scroll;
    display: flex;
    align-items: center;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const getIndex = (i) => {
    setState(i);
  };

  return (
    <div css={style}>
      {slides.length > 1 ? (
        slides.map((slide, i) => (
          <Dot
            key={slide}
            active={activeIndex === i}
            onClick={() => getIndex(i)}
          />
        ))
      ) : (
        <Dot key={0} active={true} />
      )}
    </div>
  );
}

export default Dots;
