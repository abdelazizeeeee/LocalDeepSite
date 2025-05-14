import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";

import SpaceIcon from "@/assets/space.svg";
import Loading from "../loading/loading";
import { Auth } from "../../../utils/types";

function LoadButton({
  auth,
  setHtml,
  setPath,
}: {
  auth?: Auth;
  setHtml: (html: string) => void;
  setPath: (path?: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState<string | undefined>(undefined);

  const loadSpace = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/remix/${url}`);
      const data = await res.json();
      if (res.ok) {
        if (data.html) {
          setHtml(data.html);
          toast.success("BuildWithAbdou Space loaded successfully.");
        }
        if (data.isOwner) {
          setPath(data.path);
        } else {
          setPath(undefined);
        }
        setOpen(false);
      } else {
        toast.error(data.message);
        setError(data.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div
      className={classNames("max-md:hidden", {
        "border-r border-teal-700 pr-5": auth,
      })}
    >
      <p
        className="underline hover:text-teal-100 cursor-pointer text-xs lg:text-sm text-teal-300"
        onClick={() => setOpen(!open)}
      >
        Load BuildWithAbdou Space
      </p>
      <div
        className={classNames(
          "h-screen w-screen bg-black/20 fixed left-0 top-0 z-10",
          {
            "opacity-0 pointer-events-none": !open,
          }
        )}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={classNames(
          "absolute top-[calc(100%+8px)] right-2 z-10 w-80 bg-teal-50 border border-teal-200 rounded-lg shadow-lg transition-all duration-75 overflow-hidden",
          {
            "opacity-0 pointer-events-none": !open,
          }
        )}
      >
        <>
          <header className="flex items-center text-sm px-4 py-2 border-b border-teal-200 gap-2 bg-blue-50 font-semibold text-blue-900">
            <span className="text-xs bg-teal-500/10 text-teal-500 rounded-full pl-1.5 pr-2.5 py-0.5 flex items-center justify-start gap-1.5">
              <img
                src={SpaceIcon}
                alt="BuildWithAbdou Space Icon"
                className="size-4"
              />
              BuildWithAbdou Space
            </span>
            Load Project
          </header>
          <main className="px-4 pt-3 pb-4 space-y-3">
            <p className="text-sm text-teal-600 bg-teal-500/10 rounded-md px-3 py-2">
              Load an existing BuildWithAbdou Space to continue working on it.
            </p>
            <label className="block">
              <p className="text-blue-900 text-sm font-medium mb-1.5">
                Space URL
              </p>
              <input
                type="text"
                value={url}
                className="mr-2 border rounded-md px-3 py-1.5 border-teal-300 w-full text-sm text-blue-900"
                placeholder="https://huggingface.co/spaces/username/buildwithabdou-space"
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setError(false)}
                onBlur={(e) => {
                  const pathParts = e.target.value.split("/");
                  setUrl(
                    `${pathParts[pathParts.length - 2]}/${
                      pathParts[pathParts.length - 1]
                    }`
                  );
                  setError(false);
                }}
              />
            </label>
            {error && (
              <p className="text-red-500 text-xs bg-red-500/10 rounded-md p-2 break-all">
                {error}
              </p>
            )}
            <div className="pt-2 text-right">
              <button
                disabled={error || loading || !url}
                className="relative rounded-full bg-blue-900 px-5 py-2 text-white font-semibold text-xs hover:bg-blue-800 transition-all duration-100 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                onClick={loadSpace}
              >
                Load Space
                {loading && <Loading />}
              </button>
            </div>
          </main>
        </>
      </div>
    </div>
  );
}
export default LoadButton;
