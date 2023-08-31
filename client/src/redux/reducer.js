
import { GET_GAMES, GET_BY_NAME } from "./types";

const initialState = {
  allGames: [],
  gameCopy:[],
  allGenres: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type){
    case GET_GAMES:
      return{
        ...state,
        allGames: payload,
        gameCopy: payload
      }
    case GET_BY_NAME:
      return{
        ...state,
        allGames: payload,
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;