import AddCircleIcon from "@mui/icons-material/AddCircle";
const AllUsersCard = () => {
  return (
    <div className="flex justify-between items-center border rounded-lg p-2 my-1">
      <div className="flex justify-center items-center">
        <img src="/ehtesham.jpg" className="w-14 sm:w-16 rounded-full" />
        <p className="mx-2 font-semibold sm:text-lg">Ehtesham Zahid</p>
      </div>
      <div>
        <AddCircleIcon
          color="primary"
          className="sm:text-4xl sm:mx-5 hover:text-blue-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AllUsersCard;
