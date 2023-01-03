/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import { relative } from "path";
import { useEffect, useState } from "react";

type CircleProps = {
  r: number;
  color?: string;
};
export const Circle = (props: CircleProps) => {
  const { r, color } = props;
  const w = r * 0.15;
  const color_ = color ? color : "rgba(255, 255, 255, 0.5)";

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const move = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <div style={{ position: "relative" }}>
      <div
        css={css`
          position: absolute;
          width: ${r}px;
          height: ${r}px;
          border-radius: 50%;
          border: ${w}px solid ${color_};

          animation: ${move} 1s linear;
          animation-delay: calc(var(--scroll) * -1s);
        `}
        style={{
          position: "relative",
          top: scrollPosition / 0.1 / r,
        }}
      ></div>
    </div>
  );
};
