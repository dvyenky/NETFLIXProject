import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movieList = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularList = useSelector((store) => store.movie?.popularMovies);
  const topRated = useSelector((store) => store.movie?.topRatedMovies);
  const upComing = useSelector((store) => store.movie?.upComingMovies);

  return (
    movieList && (
      <div className="bg-black">
        <div className="-mt-52 relative z-30">
          <MovieList title={"Latest"} movies={movieList} />
          <MovieList title={"Popular"} movies={popularList} />
          <MovieList title={"TopRated"} movies={topRated} />
          <MovieList title={"UpComing"} movies={upComing} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
