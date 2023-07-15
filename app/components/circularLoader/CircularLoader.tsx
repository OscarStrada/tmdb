"use client";

import "./index.css";

interface Props {
  score: number | 0;
  width: string;
  fontSize: string;
}

const CircularLoader = ({ score, width, fontSize }: Props) => {
  const radius = Number(width) * 0.4;
  const circleWidth = Number(width);
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * score) / 100;

  return (
    <>
      <svg
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
        className="bg-slate-100 rounded-full"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#0d253f" />
            <stop offset="50%" stop-color="#01b4e4" />
            <stop offset="100%" stop-color="#90cea1" />
          </linearGradient>
        </defs>
        {/* <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={"5px"}
          r={radius}
          className="fill-none stroke-blue-200"
        /> */}

        <circle
          cx={Number(width) / 2}
          cy={Number(width) / 2}
          strokeWidth={"5px"}
          r={radius}
          className="fill-none circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          font-size={fontSize}
          font-weight="bold"
        >
          {score}%
        </text>
      </svg>
    </>
  );
};

export default CircularLoader;
