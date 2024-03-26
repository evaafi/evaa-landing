import { SVGProps } from 'react';

export const TonIcon = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill="none" {...props}>
    <circle cx="12" cy="12" r="12" fill="white" />
    <path
      d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM7.902 6.697H16.098C17.603 6.697 18.56 8.325 17.803 9.637L12.744 18.402C12.6684 18.5324 12.5599 18.6406 12.4293 18.7158C12.2987 18.7911 12.1507 18.8306 12 18.8306C11.8493 18.8306 11.7013 18.7911 11.5707 18.7158C11.4401 18.6406 11.3316 18.5324 11.256 18.402L6.199 9.637C5.441 8.323 6.396 6.697 7.902 6.697ZM12.746 8.193V15.773L13.848 13.645L16.504 8.889C16.5447 8.81796 16.5659 8.73744 16.5654 8.65559C16.565 8.57373 16.543 8.49344 16.5016 8.42282C16.4602 8.3522 16.4009 8.29376 16.3297 8.25341C16.2585 8.21305 16.1779 8.19222 16.096 8.193H12.746ZM7.9 8.195C7.81832 8.19411 7.73786 8.21481 7.66674 8.25498C7.59562 8.29516 7.53637 8.3534 7.49497 8.42382C7.45357 8.49423 7.4315 8.57433 7.43098 8.65601C7.43046 8.73769 7.45151 8.81806 7.492 8.889L10.15 13.643L11.252 15.773V8.195H7.9Z"
      fill="#57A5FF"
    />
  </svg>
);