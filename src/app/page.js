import AddFriendsButton from "@components/AddFriendsButton/AddFriendsButton";
import ChatList from "@components/ChatList/ChatList";
import MainHeader from "@components/MainHeader/MainHeader";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      {" "}
      <AddFriendsButton />
      <MainHeader />
      <ChatList />
    </div>
  );
}
