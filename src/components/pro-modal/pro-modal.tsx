// ProModal component for BuildWithAbdou, styled with the blue/teal theme
import classNames from "classnames";
import { useLocalStorage } from "react-use";
import { defaultHTML } from "../../../utils/consts";

function ProModal({
  open,
  html,
  onClose,
}: {
  open: boolean;
  html: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [, setStorage] = useLocalStorage("html_content");

  const handleProClick = () => {
    if (html !== defaultHTML) {
      setStorage(html);
    }
  };

  return (
    <>
      <div
        className={classNames(
          "h-screen w-screen bg-black/20 fixed left-0 top-0 z-40",
          {
            "opacity-0 pointer-events-none": !open,
          }
        )}
        onClick={() => onClose(false)}
      ></div>
      <div
        className={classNames(
          "absolute top-0 -translate-y-[calc(100%+16px)] right-0 z-40 w-96 bg-teal-50 border border-teal-200 rounded-lg shadow-lg transition-all duration-75 overflow-hidden",
          {
            "opacity-0 pointer-events-none": !open,
          }
        )}
      >
        <header className="flex items-center text-sm px-4 py-2 border-b border-teal-200 gap-2 bg-blue-50 font-semibold text-blue-900">
          <span className="bg-teal-500/10 text-teal-500 inline-block border border-teal-200 text-xs font-bold rounded-lg px-2.5 py-0.5">
            PRO
          </span>
          Your free inference quota is exhausted
        </header>
        <main className="px-4 pt-3 pb-4">
          <p className="text-blue-900 text-sm font-semibold flex items-center justify-between">
            Upgrade to a PRO account to activate Inference Providers and
            continue using BuildWithAbdou.
          </p>
          <p className="text-sm text-pretty text-teal-600 mt-2">
            It also unlocks thousands of Space apps powered by ZeroGPU for 3D,
            audio, music, video, and more!
          </p>
          <a
            href="https://huggingface.co/subscribe/pro"
            target="_blank"
            className="mt-4 bg-blue-900 text-white cursor-pointer rounded-full py-2 px-3 text-sm font-medium w-full block text-center hover:bg-blue-800 transition duration-200 ease-in-out"
            onClick={handleProClick}
          >
            Subscribe to PRO ($9/month)
          </a>
        </main>
      </div>
    </>
  );
}

export default ProModal;
