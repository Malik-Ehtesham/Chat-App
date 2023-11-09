import ChatboxHeader from "@components/ChatboxHeader/ChatboxHeader";
import MessageBox from "@components/MessageBox/MessageBox";

export default function ChatboxLayout({ children }) {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <ChatboxHeader />
      {children}
      <MessageBox />
    </main>
  );
}
