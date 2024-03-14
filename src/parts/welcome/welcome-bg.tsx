import welcomeBgLeft from "@/assets/welcome-bg-left.svg";
import welcomeBgRight from "@/assets/welcome-bg-right.svg";
import welcomeBgCenter from "@/assets/welcome-bg-center.svg";
import welcomeBgPart from "@/assets/welcome-bg-part.svg";

export const WelcomeBg = () => {
  return (
    <div className="absolute z-0 left-0 right-0 top-0 bottom-0 flex gap-0 items-stretch h-[686px]">
      <div
        className="min-w-[32px]"
        style={{
          backgroundImage: `url(${welcomeBgLeft})`,
        }}
      ></div>
      <div
        className="w-full flex items-stretch"
        style={{
          backgroundImage: `url(${welcomeBgPart})`,
        }}
      ></div>
      <div
        className="min-w-[666px]"
        style={{
          backgroundImage: `url(${welcomeBgCenter})`,
        }}
      ></div>

      <div
        className="w-full flex items-stretch"
        style={{
          backgroundImage: `url(${welcomeBgPart})`,
        }}
      ></div>
      <div
        className="min-w-[32px]"
        style={{
          backgroundImage: `url(${welcomeBgRight})`,
        }}
      ></div>
    </div>
  );
};
