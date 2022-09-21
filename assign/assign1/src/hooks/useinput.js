import { useCallback } from "react";
import { useState } from "react";

export const useInput = (initalValue = null) => {
  const [value, setValue] = useState(initalValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, handler];
};
