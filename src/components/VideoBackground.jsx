import React, { useEffect } from "react";
import { OPTION } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const videoBackGroundMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      OPTION,
    );
    const json = await data?.json();
    const videoData = json?.results?.filter((item) => item.type === "Trailer");
    const trailer = videoData.length ? videoData[0] : json?.results[0];
    console.log(trailer);
  };
  useEffect(() => {
    videoBackGroundMovies();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PypDSyIRRSs?si=740pTiANYzPBbB4G"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
