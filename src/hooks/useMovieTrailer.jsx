import { useEffect } from "react";
import { OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addBackGroundMovie } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
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
    dispatch(addBackGroundMovie(trailer));
  };
  useEffect(() => {
    videoBackGroundMovies();
  }, []);
};

export default useMovieTrailer;
