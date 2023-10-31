import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="m-2 flex  sm:items-center  sm:w-full">
      <div className="flex items-center justify-between input  input-info  w-full    p-2 ">
        {" "}
        <input type="text" placeholder="Type here" className="w-full" />{" "}
        <button className="bg-white p-2  ">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
