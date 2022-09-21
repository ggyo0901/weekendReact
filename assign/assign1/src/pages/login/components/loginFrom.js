import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TokenService } from "../../../api/TokenService";
import { UserService } from "../../../api/userService";
import { useInput } from "../../../hooks/useinput";

const LoginForm = () => {
  const [id, setId, changeId] = useInput("");
  const [pw, setPw, changePw] = useInput("");
  const navigator = useNavigate();
  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await UserService.login({
          id,
          pw,
        });
        console.log(response);
        const { token } = response.data.data;
        TokenService.set({
          key: process.env.REACT_APP_TOKEN_KEY,
          value: token,
        });
        if (TokenService.get(process.env.REACT_APP_TOKEN_KEY)) {
          navigator("/todo");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    [id, pw]
  );
  return (
    <>
      <input type="text" value={id} onChange={changeId} />
      <input type="text" value={pw} onChange={changePw} />
      <button onClick={loginHandler}>로그인</button>
    </>
  );
};
export default LoginForm;
