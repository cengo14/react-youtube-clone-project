import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "./../../utils/Api";
import ReactPlayer from "react-player/youtube";
import Channel from "./Channel";
import Desc from "./Desc";
import Comment from "./Comment";
import VideoCard from "../../component/VideosCard";

const Detail = () => {
  const [video, setVideo] = useState(null);
  const [searcParams] = useSearchParams();
  const id = searcParams.get("v");
  useEffect(() => {
    const params = { id, extend: 1 };
    api
      .get(`video/info`, { params })
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(video);

  return (
    <div className="detail-page h-screen overflow-auto no-scrollbar">
      <div>
        <div className="h-[50vh] lg:h-[60vh] rounded overflow-hidden">
          <ReactPlayer
            playing={true}
            muted={true}
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>
        {video && (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <Channel video={video} />
            <Desc video={video} />
            <Comment videoId={id} />
          </>
        )}
      </div>
      <div className=" flex flex-col gap-5 p-1 ">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow />
            )
        )}
      </div>
    </div>
  );
};

export default Detail;
