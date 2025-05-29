/* eslint-disable @typescript-eslint/no-explicit-any */
// Settings component for BuildWithAbdou, styled with the blue/teal theme
import classNames from "classnames";

import { PiGearSixFill } from "react-icons/pi";
// @ts-expect-error not needed
import { PROVIDERS } from "./../../../utils/providers";

function Settings({
  open,
  onClose,
  provider,
  error,
  onChange,
}: {
  open: boolean;
  provider: string;
  error?: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (provider: string) => void;
}) {
  return (
    <div className="">
      <button
        className="relative overflow-hidden cursor-pointer flex-none flex items-center justify-center rounded-full text-base font-semibold size-8 text-center bg-blue-900 hover:bg-teal-500 text-white shadow-sm dark:shadow-highlight/20"
        onClick={() => {
          onClose((prev) => !prev);
        }}
      >
        <PiGearSixFill />
      </button>
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
          <span className="text-xs bg-teal-500/10 text-teal-500 rounded-full pl-1.5 pr-2.5 py-0.5 flex items-center justify-start gap-1.5">
            Provider
          </span>
          Customize BuildWithAbdou Settings
        </header>
        <main className="px-4 pt-3 pb-4 space-y-4">
          {/* toggle using tailwind css */}
          <div>
            <a
              href="https://huggingface.co/spaces/enzostvs/buildwithabdou/discussions/74"
              target="_blank"
              className="w-full flex items-center justify-between text-blue-900 bg-blue-50 border border-teal-200 px-2 py-2 rounded-lg mb-3 text-sm font-medium hover:bg-teal-100"
            >
              How to use BuildWithAbdou locally?
              <button className="bg-blue-900 text-white rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer hover:bg-blue-800">
                See the guide
              </button>
            </a>
            <div className="flex items-center justify-between">
              <p className="text-blue-900 text-sm font-medium flex items-center justify-between">
                Use auto-provider
              </p>
              <div
                className={classNames(
                  "bg-teal-200 rounded-full w-10 h-6 flex items-center justify-between p-1 cursor-pointer transition-all duration-200",
                  {
                    "!bg-teal-500": provider === "auto",
                  }
                )}
                onClick={() => {
                  onChange(provider === "auto" ? "fireworks-ai" : "auto");
                }}
              >
                <div
                  className={classNames(
                    "w-4 h-4 rounded-full shadow-md transition-all duration-200 bg-white",
                    {
                      "translate-x-4": provider === "auto",
                    }
                  )}
                />
              </div>
            </div>
            <p className="text-xs text-teal-600 mt-2">
              We'll automatically select the best provider for you based on your
              prompt.
            </p>
          </div>
          {error !== "" && (
            <p className="text-red-500 text-sm font-medium mb-2 flex items-center justify-between bg-red-500/10 p-2 rounded-md">
              {error}
            </p>
          )}
          <label className="block">
            <p className="text-blue-900 text-sm font-medium mb-2 flex items-center justify-between">
              Inference Provider
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {Object.keys(PROVIDERS).map((id: string) => (
                <div
                  key={id}
                  className={classNames(
                    "text-blue-900 text-sm font-medium cursor-pointer border p-2 rounded-md flex items-center justify-start gap-2",
                    {
                      "bg-teal-500/10 border-teal-500/15 text-teal-500":
                        id === provider,
                      "hover:bg-teal-100 border-teal-200": id !== provider,
                    }
                  )}
                  onClick={() => {
                    onChange(id);
                  }}
                >
                  <img
                    src={`/providers/${id}.svg`}
                    alt={PROVIDERS[id].name}
                    className="size-5"
                  />
                  {PROVIDERS[id].name}
                </div>
              ))}
            </div>
          </label>
        </main>
      </div>
    </div>
  );
}
export default Settings;
