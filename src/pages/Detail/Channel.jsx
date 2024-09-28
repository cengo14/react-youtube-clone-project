import millify from "millify";
import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const Channel = ({ video }) => {
  console.log(video);

  return (
    <div className="flex justify-between max-sm:justify-evenly">
      <div className="flex items-center gap-4">
        <img
          className="rounded-full size-12 max-sm:hidden"
          src={video.channelThumbnail[0].url}
          alt=""
        />
        <div className="whitespace-nowrapspace gap-1 items-center">
          <h4 className="font-bold">{video.channelTitle}</h4>
          <p className="text-gray-400">{video.subscriberCountText}</p>
        </div>
        <button className=" flex items-center gap-2 bg-white text-black px-3 h-9 transition hover:bg-gray-400 rounded-full">
          <span>
            <FaBell />
          </span>
          <span className="max-sm:hidden">Abone Ol</span>
        </button>
      </div>
      <div>
        <div className="flex items-center max-sm:gap-1 gap-3 rounded-full bg-[#272727] cursor-pointer">
          <div className="py-2 px-6 flex items-center gap-2 font-semibold text-xl border-r border-zinc-700 hover:bg-gray-500 hover:rounded-l-full">
            <BiLike />
            {millify(video.likeCount)}
          </div>
          <div className="py-2 px-6 text-xl font-semibold border-zinc-700 hover:bg-gray-500 hover:rounded-r-full">
            <BiDislike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
