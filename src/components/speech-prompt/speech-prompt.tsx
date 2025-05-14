// SpeechPrompt component for BuildWithAbdou, styled with the blue/teal theme
import classNames from "classnames";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useUpdateEffect } from "react-use";

function SpeechPrompt({
  setPrompt,
}: {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  useUpdateEffect(() => {
    if (transcript) setPrompt(transcript);
  }, [transcript]);

  useUpdateEffect(() => {
    if (!listening) resetTranscript();
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <button
      className={classNames(
        "flex cursor-pointer flex-none items-center justify-center rounded-full text-sm font-semibold size-8 text-center bg-blue-900 hover:bg-teal-500 text-white shadow-sm dark:shadow-highlight/20 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300",
        {
          "animate-pulse !bg-teal-500": listening,
        }
      )}
      onTouchStart={startListening}
      onMouseDown={startListening}
      onTouchEnd={SpeechRecognition.stopListening}
      onMouseUp={SpeechRecognition.stopListening}
    >
      <FaMicrophone className="text-base" />
    </button>
  );
}

export default SpeechPrompt;
