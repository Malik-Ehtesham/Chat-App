import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";
const AddFriendsButton = () => {
  return (
    <Link
      href="/allUsers"
      className=" bg-sky-400 p-3 fixed rounded-full  bottom-5 right-5  text-xl my-2 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <AddCircleIcon fontSize="large" />
    </Link>
  );
};

export default AddFriendsButton;
