/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useTheme } from "@mui/material";
import a from "color-alpha";

type WavesProps = {
  width: number | string;
  height: number;
};

export const Waves = (props: WavesProps) => {
  const { width, height } = props;
  const theme = useTheme();

  const moveForever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

  const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

  const anim = css`
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      viewBox="0 24 150 28"
      width={width}
      height={height}
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          css={[
            anim,
            css`
              animation-delay: -2s;
              animation-duration: 7s;
            `,
          ]}
          fill={a(theme.palette.local.white, 0.7)} //0.5"rgba(255,255,255,0.7)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          css={[
            anim,
            css`
              animation-delay: -3s;
              animation-duration: 10s;
            `,
          ]}
          fill={a(theme.palette.local.white, 0.5)} //0.3 "rgba(255,255,255,0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          css={[
            anim,
            css`
              animation-delay: -4s;
              animation-duration: 13s;
            `,
          ]}
          fill={a(theme.palette.local.white, 0.3)} //0.1 "rgba(255,255,255,0.3)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="7"
          css={[
            anim,
            css`
              animation-delay: -5s;
              animation-duration: 20s;
            `,
          ]}
          fill={theme.palette.local.white} //"rgba(255,255,255,1)"
        />
      </g>
    </svg>
  );
};
