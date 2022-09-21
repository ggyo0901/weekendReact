import { useCallback, useState } from "react";

const useInput = (initialValue = null) => {
  const [value, setter] = useState(initialValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, setter, handler];
};
export default useInput;
