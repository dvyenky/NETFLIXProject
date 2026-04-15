import useUpComingMovies from "../hooks/upComingMovies";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </>
  );
};

export default Browse;
