import { Server } from "socket.io";
//socket 실시간통신, 소켓서버를 사용하기 위해서 socket.io 라이브러리 설치 후 import

const SoketServer = (server) => {
  const io = new Server(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
      //모두승인인 상태,원래는 도메인주소를 넣어야함
      credentials: true,
    },
  });
  //소켓 서버 생성

  //cors?
  /**
   * 한도메인을 가지 웹페이지가 다른 도메인 요청의 엑세스할수있는 보안
   * 서버와 클라이언트가 서로 정해진 헤더를 통해 요청하고 응답할지 정하는 방식
   *
   * 이러한 보안 방식에서는 다른 도메인이 요청하게 되면 에러가 발생
   * 이러한 보안방식을 회피하기 위하여 cors를 모두 승인할수있도록 조치
   */
  //socket.io도 라이브러리지만 원리가 쉽고
  //socket 관련해서는 자주 사용하는 거니까 원리 정도는 이해해야 소케서버를 만들기 용이

  //명령어를 정의, 명령어 후 일어날 행동
  //클라이언트 -> socket 명령어"connection" 전달 -> 해당 유저에 socket에 관한 값이 반환
  //socket서버에 연결용
  io.on("connection", (socket) => {
    console.log("유저입장");

    //명령어
    //socket (유저구분값,소켓 연결 관련 객체, on(메시지받는거).emit(보낸는거))
    socket.on("joinRoom", (roomId, username) => {
      //on(명령어,(소켓전송시 보낸 데이터))
      // ---> 클라이언트에 joinRoom이라는 명령어와 함꼐 데이터를 같이 보낸다
      // on은 서버가 소켓 메시지를 받는 함수

      console.log(roomId);
      console.log(`${username}님 접속`);
      socket.join(roomId);
      //socket연결된 객체안에서도 방을 만들 수 있음
      //해당 방에 밀집

      //해당 방 전체(모든 인원)에게 emit 소켓 메시지를 보냅니다
      //emit("key",데이터)
      socket.broadcast.to(roomId).emit("user-connected", {
        username: username, //클라이언트가 전달 한 유저이름
        roomId: roomId, //클라이언트가 전달한 방번호
        socketId: socket.id, //유저 고유값
      });

      //클라이언트가 disconnect 명령어를 보냄
      socket.on("disconnect", () => {
        //소켓 서버가 해당 명령을 받고 그방에 있는 사람들에게 이사람이 나갔다는 소켓 메시지를 클라이언트에게 보내주는 겁니다
        //emit=소켓서버에서 클라이언트로 보내는 것 (클라이언트-> 소켓서버)
        socket.broadcast.to(roomId).emit("user-disconnected", username);
        socket.leave(roomId);
      });

      //한 대화방 내에 있는 단체 채팅
      socket.on("roomchat", (message) => {
        socket.broadcast.to(roomId).emit("user-roomchat", {
          username: message.username,
          message: message.message,
        });
      });
    });

    //1:1채팅, 귓속말
    socket.on("chat", (message) => {
      io.to(message.targetSocketId).emit("user-chat", {
        from: message.userName,
        message: message.message,
      });
    });
  });
};
export default SoketServer;
