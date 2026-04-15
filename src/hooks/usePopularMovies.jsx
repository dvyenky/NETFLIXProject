import { useEffect } from "react";
import { OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTION,
    );
    const json = await data?.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
