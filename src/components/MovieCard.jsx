import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({ posterImg }) => {
  if (!posterImg) return null;
  return (
    <div className="w-40 pr-4 cursor-pointer">
      <img alt="moviesimage" src={IMAGE_URL + posterImg} />
    </div>
  );
};

export default MovieCard;
