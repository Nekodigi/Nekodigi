//TOO COMPLICATED! RUIN

import { Box } from "@mui/material";
import { useMemo } from "react";
import { Circle } from "../atoms/circle";

type ShapesBackgroundProps = {
  width: number;
  height: number;
};

export const ShapesBackground = (props: ShapesBackgroundProps) => {
  const { width, height } = props;
  type ShapeData = {
    r: number;
    x: number;
    y: number;
  };

  const circles = useMemo(() => {
    let circles = [];
    for (let i = 0; i < 5; i++) {
      let circle: ShapeData = {
        r: Math.random() * 40 + 20,
        x: Math.random() * width,
        y: Math.random() * height,
      };
      circles.push(circle);
    }
    return circles;
  }, []);

  return (
    <Box>
      {circles.map((circle, i) => (
        <Box key={i} position="absolute" top={circle.y} left={circle.x}>
          <Circle r={circle.r} />
        </Box>
      ))}
    </Box>
  );
};
