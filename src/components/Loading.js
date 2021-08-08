import React from "react";

function Loading({ size = 231 }) {
  return (
    <div className="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translateX(${size / 8}px)`, background: "none" }}
        width={size}
        // className="m"
        height={size}
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <path
          fill="none"
          stroke="#85a2b6"
          strokeDasharray="146.25568908691406 110.33323913574219"
          strokeLinecap="round"
          strokeWidth="3.04"
          d="M18.468 22.8C8.664 22.8 3.8 32.908 3.8 38s4.864 15.2 14.668 15.2c14.668 0 24.396-30.4 39.064-30.4C67.336 22.8 72.2 32.908 72.2 38s-4.864 15.2-14.668 15.2c-14.668 0-24.396-30.4-39.064-30.4z"
          style={{
            WebkitTransformOrigin: 50,
            MsTransformOrigin: 50,
            transformOrigin: 50,
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="1.4492753623188404s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="0;256.58892822265625"
          ></animate>
        </path>
      </svg>
    </div>
  );
}

export default Loading;
