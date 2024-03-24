import { cn } from "@/lib/utils";

export const Section = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 md:grid md:grid-cols-12 md:h-[600px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SectionImage = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "col-span-5 px-4 md:px-0 col-start-2 md:flex-row justify-center relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SectionContent = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "col-start-8 col-span-5 flex flex-col md:items-start gap-6 md:pr-8 text-center md:text-left relative z-10",
        className
      )}
    >
      {children}
    </div>
  );
};
