import styled from "styled-components";
import useInput from "../../hooks/useinput";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { userData } from "../../data";
import dayjs from "dayjs";

dayjs.locale("ko");
let socket = {};
let roomId = 1;
const ChatPage = () => {
  const [chatText, setChatText, onChageChatText] = useInput("");
  const [chatting, setChatting] = useState([]);
  const { chatId } = useParams();
  const { name } = userData[chatId];
  const currentMessage = useRef(null);
  useEffect(() => {
    socket = io.connect("http://localhost:9000");
    socket?.emit("joinRoom", roomId, name);

    socket?.on("user-connected", (message) => {
      alert(`${message.username}`);
    });
  }, []);

  useEffect(() => {
    socket?.on("user-roomchat", (message) => {
      setChatting([
        ...chatting,
        {
          name: message.username,
          message: message.message,
          time: dayjs().format("A HH:mm"),
        },
      ]);
    });
    currentMessage.current.scrollIntoView();
  }, [chatting]);

  const onSendChatHandler = useCallback(
    async (e) => {
      if (e.key !== "Enter") {
        return;
      }
      e.preventDefault(); //엔터시 줄바꿈 막기
      if (chatText.trim() === "") {
        return;
        //공간을제거한 값이 빈값이 아닐떄
      }

      try {
        await socket.emit("roomchat", {
          username: name,
          message: chatText,
        });

        setChatting([
          ...chatting,
          {
            name,
            message: chatText,
            time: dayjs().format("A HH:MM"),
          },
        ]);
      } catch (err) {
        alert("채팅전송에 실패하였습니다");
        throw new Error(err);
      }
      setChatText("");
    },
    [name, chatText]
  );
  return (
    <ChattingTamplet>
      <div className="logo">KOREAIT TALK</div>
      <div className="chatContent">
        {/* 채팅 내역이 저장된 chatting state 뿌려보기 */}
        {/* 단, 내가 친 채팅은 우측, 상대방이 친(받은) 채팅은 왼쪽에 나오게*/}
        {/* 맵 삼항연산자 CSS */}
        {chatting.map((v) =>
          v.name === name ? (
            <div>
              <div className="chatTo">
                <div className="chatToTime">{v.time}</div>
                <div className="chatToBox">{v.message}</div>
              </div>
            </div>
          ) : (
            <div>
              <div className="chatFromName">{v.name}</div>
              <div className="chatFrom">
                <div className="chatFromBox">{v.message}</div>
                <div className="chatFromTime">{v.time}</div>
              </div>
            </div>
          )
        )}
        <div ref={currentMessage} />
      </div>
      <div>
        <textarea
          rows="4"
          value={chatText}
          onChange={onChageChatText}
          onKeyDown={onSendChatHandler}
        ></textarea>
      </div>
    </ChattingTamplet>
  );
};
export default ChatPage;
const ChattingTamplet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 100vh;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: -60px 0px 100px -90px #000, 60px 0px 100px -90px #000;
  text-align: center;
  padding-top: 2rem;

  & .logo {
    text-align: left;
    margin-left: 2rem;
    font-weight: 900;
    color: #1a6dff;
  }

  & .chatContent {
    height: 80vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    padding: 2rem;
  }

  & textarea {
    width: 90%;
    resize: none;
    border-radius: 0.8rem;
    border: none;
    padding: 0.3rem;

    &:focus {
      outline: none;
    }
  }

  & .chatTo {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.5rem;
  }

  & .chatFrom {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0.5rem;
  }

  & .chatFromName {
    text-align: left;
    color: #222;
    font-size: 0.675rem;
    margin-left: 0.7rem;
    margin-top: 0.3rem;
  }

  & .chatToBox {
    max-width: 65%;
    background-color: #1a6dff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 0.875rem;
    margin-top: 0.3rem;
    text-align: left;
    color: #fff;
  }

  & .chatFromBox {
    max-width: 65%;
    background-color: #eee;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 0.875rem;
    margin-top: 0.3rem;
    text-align: left;
    color: #222;
  }

  & .chatToTime {
    display: flex;
    max-width: 100%;
    flex-grow: 1;
    flex-basis: 0;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 0.525rem;
    color: #222;
    margin-right: 0.3rem;
  }

  & .chatFromTime {
    display: flex;
    max-width: 100%;
    flex-grow: 1;
    flex-basis: 0;
    align-items: flex-end;
    justify-content: flex-start;
    font-size: 0.525rem;
    color: #222;
    margin-left: 0.2rem;
  }
`;
