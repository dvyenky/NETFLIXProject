import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-6 ">
        <h1 className="text-lg py-4 text-white">{title}</h1>
        <div className="flex overflow-auto pl-4">
          <div className="flex">
            {movies.map((item) => (
              <MovieCard key={item.id} posterImg={item.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
