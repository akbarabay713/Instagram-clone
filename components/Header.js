import { SearchIcon, XCircleIcon, HomeIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { modalState } from "./../atoms/stateAtom";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import Image from "next/image";

function Header({ addImage, postImage }) {
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const onFocus = () => {
    setFocus(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/`);
  };
  return (
    <div className="flex md:justify-around lg:justify-around justify-between items-center shadow md:px-24 py-3 px-3 fixed top-0 left-0 right-0 bg-white z-10">
      <Dialog
        className="grid place-items-center "
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modal onAddImage={addImage} onPostImage={postImage} />
      </Dialog>
      {/* left/ */}
      <div className="flex">
        <img
          className="w-24 bg-white object-contain hidden md:inline-grid lg:inline-grid sm:inline-grid"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />

        <img
          className="w-10 bg-white object-contain md:hidden lg:hidden sm:hidden"
          src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png"
          alt="logo"
        />
      </div>

      {/* center */}
      <div className="hidden md:inline-grid lg:inline-grid cursor-text">
        <div className="flex items-center bg-[#efefef] rounded-xl h-9 w-64 p-2  ">
          <SearchIcon
            className={`h-5 w-5 text-gray-300 ${
              focus ? "hidden" : "inline-grid"
            }`}
          />
          <input
            type="text"
            placeholder="search..."
            className="form-input rounded-xl h-9  bg-[#efefef]  border-transparent  focus:border-transparent focus:ring-0"
            onClick={onFocus}
          />
          <XCircleIcon
            className={`text-gray-300 h-5 w-5 cursor-pointer ${
              focus ? "inline-grid" : "hidden"
            }`}
            onClick={() => setFocus(false)}
          />
        </div>
      </div>

      {/* right */}
      <div className="flex space-x-5 items-center">
        <HomeIcon className="h-7 w-7 cursor-pointer" onClick={handleClick} />
        {/* <PaperAirplaneIcon className="h-7 w-7 cursor-pointer origin-center rotate-45" /> */}
        <PlusCircleIcon
          className="h-7 w-7 cursor-pointer"
          onClick={handleToggle}
        />
        <Avatar alt="pic" src={user.photoURL} sx={{ width: 26, height: 26 }} />
      </div>
    </div>
  );
}

export default Header;
