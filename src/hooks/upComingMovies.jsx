import { useEffect } from "react";
import { OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTION,
    );
    const json = await data?.json();
    dispatch(addUpComingMovies(json?.results));
  };
  useEffect(() => {
    upComingMovies();
  }, []);
};

export default useUpComingMovies;
