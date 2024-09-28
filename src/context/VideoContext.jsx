import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constans";
import api from "../utils/Api";

export const VideoContext = createContext();
export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [category, setCategory] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let type = category.type;

    if (type === "menu") return;
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : `/search?query=${category.name}`;
    setIsLoading(true);
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category]);
  return (
    <VideoContext.Provider
      value={{ videos, category, error, isLoading, setCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
