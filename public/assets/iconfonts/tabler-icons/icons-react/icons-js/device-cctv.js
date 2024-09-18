import * as React from 'react';

function IconDeviceCctv({
  size = 24,
  color = 'currentColor',
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-cctv"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={stroke}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <desc>
        {
          'Download more icon variants from https://tabler-icons.io/i/device-cctv'
        }
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x={3} y={3} width={18} height={4} rx={1} />
      <circle cx={12} cy={14} r={4} />
      <path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
      <line x1={12} y1={14} x2={12.01} y2={14} />
    </svg>
  );
}

export default IconDeviceCctv;
