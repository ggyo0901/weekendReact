import { useState } from "react";
const useInput = (initalvalue = null) => {
  const [value, setValue] = useState(initalvalue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange, setValue];
};
export default useInput;
