import { SVGProps } from "react";

export const ArrowDownIcon = ({ width, height, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7168 14.9158C12.1172 15.4201 12.8828 15.4201 13.2832 14.9158L15.9757 11.5241C16.496 10.8687 16.0292 9.90234 15.1925 9.90234H9.80751C8.97075 9.90234 8.50404 10.8687 9.0243 11.5241L11.7168 14.9158Z"
        fill="white"
      />
    </svg>
  );
};
