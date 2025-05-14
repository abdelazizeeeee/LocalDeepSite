// Login component for BuildWithAbdou, styled with the blue/teal theme
import { useLocalStorage } from "react-use";
import { defaultHTML } from "./../../../utils/consts";

function Login({
  html,
  children,
}: {
  html?: string;
  children?: React.ReactNode;
}) {
  const [, setStorage] = useLocalStorage("html_content");

  const handleClick = async () => {
    if (html !== defaultHTML) {
      setStorage(html);
    }
    const request = await fetch("/api/login");
    const res = await request.json();
    if (res?.redirectUrl) {
      window.open(res.redirectUrl, "_blank");
    }
  };

  return (
    <>
      <header className="flex items-center text-sm px-4 py-2 border-b border-teal-200 gap-2 bg-blue-50 font-semibold text-blue-900">
        <span className="text-xs bg-teal-500/10 text-teal-500 rounded-full pl-1.5 pr-2.5 py-0.5 flex items-center justify-start gap-1.5">
          REQUIRED
        </span>
        Login to BuildWithAbdou
      </header>
      <main className="px-4 py-4 space-y-3">
        {children}
        <button onClick={handleClick}>
          <img
            src="https://huggingface.co/datasets/huggingface/badges/resolve/main/sign-in-with-huggingface-lg-dark.svg"
            alt="Sign in to BuildWithAbdou with Hugging Face"
            className="mx-auto"
          />
        </button>
      </main>
    </>
  );
}

export default Login;
