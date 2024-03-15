import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { SVGProps } from "react";

export type LogoProps = SVGProps<SVGSVGElement> & {
  size: "base" | "lg";
};

const progressVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    size: {
      default: "bg-progress",
      warning: "bg-progress-warning",
      danger: "bg-progress-danger",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className="font-bold text-sm flex items-center">
      <span className="text-white">
        <svg
          width="48"
          height="48"
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#a)" fill="currentColor">
            <path d="M31.733 9s-7.552 1.857-10.504 2.663l-5.38 1.262-4.836-1.262S11 15.328 11 17.198l4.889 1.352s15.844-4.017 15.844-3.91V9z" />
            <path d="M29.094 16.367 15.8 19.741 11 18.433l.012 5.388c1.23.446 4.831 1.53 4.831 1.53l13.251-3.343v-5.64z" />
            <path d="M15.912 26.529 11 25.342s.013 1.135.013 2.71v2.861l4.815 1.288 15.905-3.935V22.65l-15.821 3.88z" />
          </g>
          <defs>
            <clipPath id="a">
              <path transform="translate(11 9)" d="M0 0h20.733v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span
        className={cn(
          "hidden font-black uppercase md:block w-20 leading-[14px] text-sm",
          className
        )}
      >
        Evaa Protocol
      </span>
    </div>
  );
};
