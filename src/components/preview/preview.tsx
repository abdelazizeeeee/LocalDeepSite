// Preview component for BuildWithAbdou, styled with the blue/teal theme
import classNames from "classnames";
import { useRef } from "react";
import { TbReload } from "react-icons/tb";
import { toast } from "react-toastify";
import { FaLaptopCode } from "react-icons/fa6";
import { defaultHTML } from "../../../utils/consts";

function Preview({
  html,
  isResizing,
  isAiWorking,
  setView,
  ref,
}: {
  html: string;
  isResizing: boolean;
  isAiWorking: boolean;
  setView: React.Dispatch<React.SetStateAction<"editor" | "preview">>;  
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleRefreshIframe = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const content = iframe.srcdoc;
      iframe.srcdoc = "";
      setTimeout(() => {
        iframe.srcdoc = content;
      }, 10);
    }
  };

  return (
    <div
      ref={ref}
      className="w-full border-l border-primary-700/30 bg-white h-[calc(100dvh-49px)] lg:h-[calc(100dvh-53px)] relative shadow-inner"
      onClick={(e) => {
        if (isAiWorking) {
          e.preventDefault();
          e.stopPropagation();
          toast.warn("Please wait for BuildWithAbdou AI to finish working.");
        }
      }}
    >
      <div className="absolute top-0 left-0 right-0 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-3 py-2 z-10">
        <button
          onClick={handleRefreshIframe}
          className="text-primary-600 hover:text-primary-800 p-1 rounded-full hover:bg-primary-50 transition-colors duration-200"
          title="Refresh Preview"
        >
          <TbReload className="text-lg" />
        </button>
        
        <button
          onClick={() => setView("editor")}
          className="md:hidden flex items-center gap-1 text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-md hover:bg-primary-100 transition-colors duration-200"
        >
          <FaLaptopCode />
          <span>Editor</span>
        </button>
      </div>
      
      <iframe
        ref={iframeRef}
        title="output"
        className={classNames("w-full h-full select-none mt-10", {
          "pointer-events-none": isResizing || isAiWorking,
          "opacity-50": isAiWorking,
        })}
        srcDoc={html || defaultHTML}
        sandbox="allow-scripts allow-modals"
      />
      
      {isAiWorking && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-900/20 backdrop-blur-sm z-20">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-3"></div>
            <p className="text-dark-600 font-medium">BuildWithAbdou AI is working...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Preview;
