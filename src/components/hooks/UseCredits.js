import { useState, useEffect } from "react";

export const useCredits = () => {
  const [credits, setCredits] = useState(2);

  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
  }, []);

  const saveCredits = (credits) => {
    localStorage.setItem("credits", credits.toString());
  };

  return { credits, setCredits, saveCredits };
};
