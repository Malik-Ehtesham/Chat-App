import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MessageBox = () => {
  return (
    <div className="flex justify-evenly bg-sky-400 h-20 items-center p-2">
      <TextField
        className="w-full bg-white border-none rounded-lg mx-3"
        label="Your Message"
        id="fullWidth"
      />
      <SendIcon />
    </div>
  );
};

export default MessageBox;
