import millify from "millify";
import React, { useState } from "react";

const Desc = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);
  const text =
    isOpen || !video.description
      ? video.description
      : video.description.slice(0, 180) + "... daha fazla";
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-gri rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2">
        <p className="font-semibold">{millify(video.viewCount)} Görüntülenme</p>
        <p>
          {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          tarihinde yayınlandı
        </p>
      </div>
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default Desc;
