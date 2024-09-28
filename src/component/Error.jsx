import React, { useContext } from "react";
import { VideoContext } from "./../context/VideoContext";

const Error = () => {
  const { error } = useContext(VideoContext);
  console.log(error);

  return (
    <div className="text-center mx-auto mt-40 p-5 h-fit">
      <p>
        Üzgünüz bir hata oluştu. Lütfen ulaşmaya çalıştığınız adresi kontrol
        edip tekrar deneyiniz.
      </p>
      <img
        className="mx-auto mt-10"
        src="../../public/youtube-error.png"
        alt="error"
      />
      <p className="mt-10 text-2xl font-semibold text-yellow-400">{error}</p>
    </div>
  );
};

export default Error;
