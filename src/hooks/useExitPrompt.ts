import { useState, useEffect } from 'react';

export default function useExitPrompt(bool) {
  const [showExitPrompt, setShowExitPrompt] = useState(bool);

  useEffect(() => {
    if (showExitPrompt) {
      window.onbeforeunload = function () {
        return showExitPrompt;
      };
    }
    return () => {
      window.onbeforeunload = null;
    };
  }, [showExitPrompt]);

  return {
    showExitPrompt,
    setShowExitPrompt,
  };
}
