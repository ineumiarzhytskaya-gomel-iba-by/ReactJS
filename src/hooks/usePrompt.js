import { useEffect, useState } from "react";

const usePrompt = (interval, modalText) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setUserInput(prompt(modalText));
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [interval, modalText]);

  return userInput;
};

export default usePrompt;
