/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const getWidth = () => window.innerWidth;

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

function Dots({ slides, activeIndex, setState, state, width }) {
  const style = css`
    position: absolute;
    padding: 2px;
    height: 30px;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    overflow-x: scroll;
    display: flex;
    align-items: center;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const getIndex = (i) => {
    setState({
      ...state,
      translate: i * width,
      activeIndex: i,
    });
  };

  return (
    <div css={style}>
      {slides.map((slide, i) => (
        <Dot
          key={slide}
          active={activeIndex === i}
          onClick={() => getIndex(i)}
        />
      ))}
    </div>
  );
}

export default Dots;
