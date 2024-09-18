import * as React from 'react';

function IconMailboxOff({
  size = 24,
  color = 'currentColor',
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mailbox-off"
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
          'Download more icon variants from https://tabler-icons.io/i/mailbox-off'
        }
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5" />
      <path d="M12 8v-5h4l2 2l-2 2h-4" />
      <path d="M6 15h1" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

export default IconMailboxOff;
