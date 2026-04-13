import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTION } from "../utils/constant";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const fetchNowMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTION,
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    fetchNowMovies();
  }, []);
};

export default useNowPlayingMovie;
