"use client";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";
const ScrollToTopButton = () => {
  // -----HANDLERS--------
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 300,
      delay: 0,
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className="bg-sky-400 p-1 fixed rounded-full  bottom-5 left-5  text-xl my-2 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <img src="/upArrow.png" className="w-12" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
