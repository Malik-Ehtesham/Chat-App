import AddFriendsButton from "@components/AddFriendsButton/AddFriendsButton";
import ChatList from "@components/ChatList/ChatList";
import MainHeader from "@components/MainHeader/MainHeader";
import ScrollToTopButton from "@components/ScrollToTopButton/ScrollToTopButton";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      {" "}
      <MainHeader name="test1" />
      <ChatList />
      <AddFriendsButton />
      <ScrollToTopButton />
    </div>
  );
}
