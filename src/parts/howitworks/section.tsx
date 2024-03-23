import { cn } from "@/lib/utils";

export const Section = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "grid grid-cols-12 md:flex-row justify-stretch items-center h-[600px]",
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
        "col-span-5 col-start-2 md:flex-row justify-center relative",
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
        "col-start-8 col-span-5 flex flex-col items-start gap-6 pr-8",
        className
      )}
    >
      {children}
    </div>
  );
};
