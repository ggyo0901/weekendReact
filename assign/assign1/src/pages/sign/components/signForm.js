import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../../api/userService";
import { useInput } from "../../../hooks/useinput";
import useRegExp from "../../../hooks/useRegExp";

const SignForm = () => {
  const [id, setId, changeId] = useInput("");
  const [pw, setPw, changePw] = useInput("");
  const navigator = useNavigate();
  const disabled = useRegExp(id, pw);
  const signHandler = useCallback(
    async (e) => {
      //   e.preventDefalt();
      try {
        const response = await UserService.signUp({
          id,
          pw,
        });
        if (response.status === 201) {
          alert("회원가입을 축하드립니다");
          navigator("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [id, pw]
  );
  return (
    <>
      <input type="text" value={id} onChange={changeId} />
      <input type="text" value={pw} onChange={changePw} />

      <button onClick={signHandler} disabled={disabled}>
        회원가입
      </button>
    </>
  );
};
export default SignForm;
