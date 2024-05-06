import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <div className="flex justify-between pt-5 pb-2 bg-red-800">
      <div className="">
        <h1 className="text-4xl pl-3  italic font-bold">
          Unplayed <span className="text-slate-200">Games</span>
        </h1>
      </div>
      <div className="flex gap-7 text-xl font-bold pt-1 text-slate-200 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/all"}>All</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/bookmark"}>Bookmark</Link>
        <Link to={"/profile"}>Profile</Link>
      </div>
      <div className="px-2">
        <input
          className="border-red-500 border  px-2 py-1 outline-none"
          type="text"
          placeholder="Search..."
          name=""
          id=""
        />
        <BiSearch
          className="relative  bg-transparent mt-2 top-[-34px] left-[180px] "
          size={20}
        />
      </div>
    </div>
  );
};

export default Header;