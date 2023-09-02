
import { GET_GAMES, GET_BY_NAME, GET_BY_ID } from "./types";

const initialState = {
  allGames: [],
  gameCopy:[],
  allGenres: [],
  gameDetail: [],
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
    case GET_BY_ID:
      return{
        ...state,
        gameDetail: payload,
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;