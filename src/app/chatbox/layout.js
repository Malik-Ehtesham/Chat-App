import ChatboxHeader from "@components/ChatboxHeader/ChatboxHeader";
import MessageBox from "@components/MessageBox/MessageBox";

export default function ChatboxLayout({ children }) {
  return (
    <main>
      <ChatboxHeader />
      {children}
      <MessageBox />
    </main>
  );
}
