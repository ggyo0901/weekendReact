import ChatPage from "../pages/chat";
import LoginPage from "../pages/login";

const routes = () => [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/chat/:chatId",
    element: <ChatPage />,
  },
];
export default routes;
