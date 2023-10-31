import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ChatboxHeader = () => {
  return (
    <div className="flex items-center p-2 px-2 sm:px-5 bg-sky-400">
      <button className="btn-circle bg-white transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
        <ArrowBackIcon />
      </button>
      <div className="flex items-center mx-2">
        <img
          className="w-14  mx-2 rounded-full border-2 border-white"
          src="/ehtesham.jpg"
        />
        <p className="font-bold text-white sm:text-lg">Ehtesham Zahid</p>
      </div>
    </div>
  );
};

export default ChatboxHeader;
