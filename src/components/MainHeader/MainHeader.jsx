import SearchBar from "@components/SearchBar/SearchBar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
const MainHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-sky-400 p-2 sticky top-0">
      <div className="flex items-center  justify-evenly">
        <div className="my-2 flex items-center">
          <img
            src="/ehtesham.jpg"
            className="w-16 rounded-full border-2 border-white"
          />
          <p className="mx-2 font-bold text-white sm:w-48">Ehtesham Zahid</p>
          <SettingsIcon />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default MainHeader;
