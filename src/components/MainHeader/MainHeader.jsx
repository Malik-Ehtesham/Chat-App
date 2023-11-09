import SearchBar from "@components/SearchBar/SearchBar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <SettingsIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <Link href="profileSettings">Profile Settings</Link>
              </li>
              <li>
                <Link href="accountSettings">Account Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default MainHeader;
