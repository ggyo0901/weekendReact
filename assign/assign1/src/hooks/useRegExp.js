import { useEffect, useState } from "react";

const useRegExp = (id, pw) => {
  const [idResult, setIdResult] = useState(false);
  const [pwResult, setPwResult] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const idRegExp = id.includes("@");
    if (id === "") {
      setIdResult(false);
    } else {
      if (idRegExp) {
        setIdResult(true);
      } else {
        setIdResult(false);
      }
    }
  }, [id]);
  useEffect(() => {
    const pwRegExp = pw.length > 7;
    if (pw === "") {
      setPwResult(false);
    } else {
      if (pwRegExp) {
        setPwResult(true);
      } else {
        setPwResult(false);
      }
    }
  }, [pw]);
  return disabled;
};

export default useRegExp;
