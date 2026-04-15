import { useEffect } from "react";
import { OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTION,
    );
    const json = await data?.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
