import React, { useEffect, useState } from "react";
import api from "../../utils/Api";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

const Comment = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(null);
  console.log(comments);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/comments?id=${videoId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  return (
    <div className="my-6">
      {isLoading ? (
        <p>Yorumlar yükleniyor...</p>
      ) : (
        <>
          <h2 className="text-xl font-bold">{comments?.commentsCount} Yorum</h2>
          <input
            className="w-full bg-transparent border-b border-zinc-600 p-2 outline-none mb-5"
            placeholder="yorum yazın"
            type="text"
          />
          {comments.data.map((i) => (
            <div key={i.id} className="flex gap-3 items-start px-1 py-4">
              <img
                className="rounded-full size-8 sm:size-10"
                src={i.authorThumbnail[0].url}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h5 className="flex gap-2 items-center">
                  <span className="font-semibold text-md">{i.authorText}</span>
                  <span className="font-light text-gray-400 text-sm">
                    {i.publishedTimeText}
                  </span>
                </h5>
                <p>{i.textDisplay}</p>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
                    <AiOutlineLike className="text-2xl" />
                    <span className="text-md text-gray-400">
                      {i.likesCount}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
                    <AiOutlineDislike className="text-2xl" />
                  </div>
                  <span className="hover:bg-gray-700 p-1 rounded cursor-pointer">
                    Yanıtla
                  </span>
                </div>
                {i.replyCount > 0 && (
                  <div className="flex w-fit items-center p-3 rounded-full gap-2 text-blue-500 cursor-pointer hover:bg-[#36639662]">
                    <TiArrowSortedDown />
                    {i.replyCount} yanıt
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Comment;
