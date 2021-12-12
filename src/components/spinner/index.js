import React from "react";

const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", background: "#f1f2f3", display: "block" }}
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <clipPath id="a">
        <path d="M0-40.5a40.5 40.5 0 0 1 0 81 40.5 40.5 0 0 1 0-81M23.5-1v2h7v-2Z" />
      </clipPath>
      <g transform="translate(50 50)" fill="none" strokeWidth={5}>
        <circle
          clipPath="url(#a)"
          r={26}
          stroke="#00b30c"
          strokeDasharray="40.840704496667314 0 0 0 0 163.36281798666926"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.1s"
            keyTimes="0;0.2;0.4;0.6;0.8;1"
            values="0 0 0 0 0 163.36281798666926; 0 0 0 0 0 163.36281798666926; 0 0 81.68140899333463 0 0 163.36281798666926; 0 0 163.36281798666926 0 0 163.36281798666926; 0 0 81.68140899333463 0 0 163.36281798666926; 0 0 0 0 0 163.36281798666926"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.1s"
            values="0;0;0;0;180;360"
          />
        </circle>
        <circle
          r={32}
          stroke="#ff8101"
          strokeDasharray="100.53096491487338 0 0 201.06192982974676"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            values="0 0 0 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 100.53096491487338 0 0 201.06192982974676; 0 0 0 0 0 201.06192982974676"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            values="0;0;0;180;180;360"
          />
        </circle>
        <circle
          r={38}
          stroke="#f71000"
          strokeDasharray="119.38052083641213 0 0 238.76104167282426"
          transform="rotate(45)"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            keyTimes="0;0.06;0.1;0.3;0.45;0.5;0.7;0.90;1"
            values="0 0 89.5353906273091 0 0 238.76104167282426; 0 0 89.5353906273091 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 29.845130209103033 0 0 238.76104167282426; 0 0 29.845130209103033 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 119.38052083641213 0 0 238.76104167282426; 0 0 89.5353906273091 0 0 238.76104167282426"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            keyTimes="0;0.06;0.1;0.3;0.5;0.6;0.8;0.90;1"
            values="-60;0;0;0;180;180;180;180;300"
          />
        </circle>
      </g>
    </svg>
  );
};

export default Spinner;
