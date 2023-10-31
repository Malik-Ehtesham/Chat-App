import ChatList from "@components/ChatList/ChatList";
import MainHeader from "@components/MainHeader/MainHeader";

export default function Home() {
  return (
    <div className="flex flex-col">
      {" "}
      <MainHeader />
      <ChatList />
    </div>
  );
}
