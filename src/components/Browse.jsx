import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </>
  );
};

export default Browse;
