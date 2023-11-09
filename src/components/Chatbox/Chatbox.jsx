import ChatCard from "@components/ChatCard/ChatCard";
import ChatboxHeader from "@components/ChatboxHeader/ChatboxHeader";
import MessageBox from "@components/MessageBox/MessageBox";

const Chatbox = () => {
  return (
    <div className="h-96 flex flex-col items-end  overflow-y-auto">
      <ChatCard /> <ChatCard /> <ChatCard /> <ChatCard /> <ChatCard />{" "}
      <ChatCard />
      <ChatCard />
    </div>
  );
};

export default Chatbox;
