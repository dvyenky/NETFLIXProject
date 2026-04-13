import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    addBackGroundMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBackGroundMovie: (state, action) => {
      state.addBackGroundMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addBackGroundMovie } = movieSlice.actions;

export default movieSlice.reducer;
