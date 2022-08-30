import { useEffect, useState } from "react";

const usePrompt = (interval, modalText) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    let intervalId = setInterval(() => {
      setUserInput(prompt(modalText));
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, modalText]);

  return userInput;
};

export default usePrompt;
