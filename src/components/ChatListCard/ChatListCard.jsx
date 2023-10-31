const ChatListCard = () => {
  return (
    <div className="flex w-full my-3">
      <div>
        <img src="./ehtesham.jpg" className="w-16 m-1 rounded-full" />
      </div>
      <div className="flex flex-col justify-evenly border-b-2 m-1 mx-3 w-full">
        <div className="flex flex-row justify-between">
          <p className="font-bold sm:text-lg text-sky-400">Ehtesham Zahid</p>{" "}
          <p className="text-sm  text-gray-400 ">Yesterday</p>
        </div>

        <p className="font-light text-sm sm:text-md sm:font-medium text-gray-400">
          Main Theek Aap ka kya haal hai
        </p>
      </div>
    </div>
  );
};

export default ChatListCard;
