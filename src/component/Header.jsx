import React from "react";
import { Link, useNavigate } from "react-router-dom";
import youtube from "../../public/youtube.png";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
    e.target[0].value = "";
  };
  return (
    <header className="flex justify-between items-center p-3">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-8 sm:w-12" src={youtube} alt="youtube logo" />
        <h1 className="font-semibold text-xl sm:text-2xl max-md:hidden max-sm:block">
          YouTube <sup className="text-xs font-light max-sm:hidden">TR</sup>{" "}
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-500 rounded-3xl overflow-hidden "
      >
        <input
          className="bg-black outline-none px-5 py-1 sm:py-2 border border-transparent focus:border-white rounded-l-3xl md:w-72 max-md:w-44 max-sm:w-20 "
          type="text"
        />
        <button className="px-4 max-sm:px-2 text-2xl bg-zinc-800 hover:bg-zinc-700 transition">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-5 text-2xl items-center cursor-pointer ">
        <MdUpload className=" hover:text-gray-400 transition max-sm:hidden" />
        <FaBell className=" hover:text-gray-400 transition max-sm:hidden" />
        <LuUserCircle2 className="text-4xl hover:text-gray-400 transition" />
      </div>
    </header>
  );
};

export default Header;
