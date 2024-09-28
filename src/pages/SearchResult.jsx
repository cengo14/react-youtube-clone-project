import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "./../utils/Api";
import Sidebar from "../component/Sidebar";

import VideoCard from "../component/VideosCard";
import Loader from "./../component/Loader";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const query = searchParams.get("search_query");
  let params = {
    query,
    type: "video",
  };
  useEffect(() => {
    setIsLoading(true);
    setPage(1);
    api
      .get(`/search`, { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  const handleClick = (e) => {
    console.log(e.target);

    setIsLoading(true);
    setPage(page + 1);
    params = { ...params, token };
    api
      .get(`/search`, { params })
      .then((res) => {
        setData([...data, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };
  // useEffect(() => {
  //   setData([]);
  //   setToken(null);
  //   setPage(1);
  // }, [query]);
  return (
    <div className="flex max-sm:gap-1 gap-10">
      <Sidebar />
      <div className="p-4 sm:p-6 md:p-10 h-[90vh] overflow-y-auto no-scrollbar">
        <h2 className="text-xl mb-5">
          <span className="fotn-bol">{query}</span> için sonuçlar
        </h2>
        <div className="flex flex-col gap-5 justify-center">
          {data &&
            data.map(
              (i) =>
                i.type === "video" && (
                  <VideoCard video={i} key={i.videoId} isRow />
                )
            )}
          {isLoading && <Loader spinner />}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            disabled={isLoading}
            className={`bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition ${
              isLoading && "hidden"
            }`}
          >
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
