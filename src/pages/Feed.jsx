import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import Error from "./../component/Error";
import Sidebar from "./../component/Sidebar";
import VideoCart from "../component/VideosCard";
import Loader from "../component/Loader";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);
  console.log(videos);

  return (
    <div className="flex max-sm:gap-1 gap-10 ">
      <Sidebar />
      <div className="w-full videos no-scrollbar">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          videos?.map(
            (video) =>
              video.type === "video" && (
                <VideoCart key={video.videoId} video={video} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
