// Tabs component for BuildWithAbdou, styled with the blue/teal theme
import Deepseek from "./../../assets/deepseek-color.svg";

function Tabs({ children }: { children?: React.ReactNode }) {
  return (
    <div className="border-b border-teal-700 pl-4 lg:pl-7 pr-3 flex items-center justify-between">
      <div className="space-x-6">
        <button className="rounded-md text-sm cursor-pointer transition-all duration-100 font-medium relative py-2.5 text-white">
          index.html
          <span className="absolute bottom-0 left-0 h-0.5 w-full transition-all duration-100 bg-teal-500" />
        </button>
      </div>
      <div className="flex items-center justify-end gap-3">
        <a
          href="https://huggingface.co/deepseek-ai/DeepSeek-V3-0324"
          target="_blank"
          className="text-[12px] text-teal-300 hover:text-teal-100 flex items-center gap-1 font-code"
        >
          Powered by <img src={Deepseek} className="size-5" alt="Deepseek" />{" "}
          Deepseek
        </a>
        {children}
      </div>
    </div>
  );
}

export default Tabs;
