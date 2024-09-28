import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const source =
    isHover && video.richThumbnail && video.richThumbnail[0]
      ? video.richThumbnail[0].url
      : video.thumbnail[video.thumbnail.length - 1].url;
  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow && "row"} w-full cursor-pointer`}
    >
      <div>
        <img className="rounded-lg w-full h-full" src={source} alt="video" />
      </div>
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full`}
          src={
            video.channelThumbnail != null && video.channelThumbnail.length > 0
              ? video.channelThumbnail[0].url
              : ""
          }
          alt="channelphoto"
        />
        <div>
          <h4 className="font-bold line-clamp-2 max-sm:text-sm">
            {video.title}
          </h4>
          <p className="my-1 max-sm:text-[14px]">{video.channelTitle}</p>
          <div className="flex gap-3 items-center">
            <p>
              <span className="max-sm:text-[12px]">
                {millify(video.viewCount)}{" "}
              </span>
              <span className="text-md view max-sm:text-[12px]">
                Görüntülenme
              </span>
            </p>{" "}
            *
            <p className="max-sm:text-[12px]">
              {video.isLive ? (
                <span className="bg-red-500 p-1 rounded-md max-sm:text-[12px]">
                  Canlı
                </span>
              ) : (
                video.publishedTimeText
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
