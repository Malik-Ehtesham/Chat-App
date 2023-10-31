import ChatListCard from "@components/ChatListCard/ChatListCard";

const ChatList = () => {
  return (
    <div className="flex flex-col">
      <ChatListCard /> <ChatListCard /> <ChatListCard /> <ChatListCard />{" "}
      <ChatListCard /> <ChatListCard />
    </div>
  );
};

export default ChatList;
