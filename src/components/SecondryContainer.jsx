import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movieList = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log(movieList);
  return (
    movieList && (
      <div className="bg-black">
        <div className="-mt-52 relative z-30">
          <MovieList title={"Latest"} movies={movieList} />
          <MovieList title={"Popular"} movies={movieList} />
          <MovieList title={"Trending"} movies={movieList} />
          <MovieList title={"Horor"} movies={movieList} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
