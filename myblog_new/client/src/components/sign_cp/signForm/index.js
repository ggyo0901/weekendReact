import { useCallback, useState } from "react";
import { useInput } from "../../../hooks/userInput";
import { SignForm_box, SignForm, BtnBox, SignInput, Sing_hp } from "./style";
const Sign_Form = () => {
  const [id, setId, ChangeId] = useInput("");
  const [pw, setPw, ChangePw] = useInput("");
  const [phone, setphone, changePhone] = useInput("");

  const [confirmPw, setConfirmPw] = useState("");
  const [pwCheck, setPwCheck] = useState(false);

  const onConfirmPw = useCallback(
    (e) => {
      setConfirmPw(e.target.value);
      setPwCheck(e.target.value !== pw);
    },
    [pw]
  );
  const join = useCallback(
    (e) => {
      console.log(pw);
      console.log(confirmPw);
      console.log(pwCheck);
      if (pwCheck) {
        if (!alert("비밀번호가 일칭하지않습니다")) {
          setConfirmPw("");
        }
        return;
      } else {
        alert("회원가입완료");
      }
    },
    [pwCheck]
  );
  return (
    <SignForm_box>
      <SignForm>
        <p>
          이메일
          <SignInput placeholder=".com" valeu={id} onChange={ChangeId} />
        </p>
        <p>
          비밀번호
          <SignInput
            placeholder="대소문자 특수문자 8자리 이상"
            value={pw}
            onChange={ChangePw}
          />
        </p>
        <p>
          비밀번호 확인
          <SignInput
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={confirmPw}
            onChange={onConfirmPw}
          />
        </p>
        <p>
          핸드폰 번호
          <SignInput
            placeholder="010-0000-0000"
            value={phone}
            onChange={changePhone}
          />
        </p>
        <BtnBox>
          <Sing_hp>인증하기</Sing_hp>
          {/* <!-- signButton --> */}
        </BtnBox>
        <div>
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
        <BtnBox>
          <button onClick={join}>회원가입</button>
          {/* <!-- signButton --> */}
        </BtnBox>
      </SignForm>
    </SignForm_box>
  );
};
export default Sign_Form;
