
import { GET_GAMES, GET_BY_NAME, GET_BY_ID, GET_GENRES, FILTER, ORDER, RESET_GAME_DETAIL } from "./types";

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
      case GET_GENRES:
        return{
          ...state,
          allGenres: payload,
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
        case RESET_GAME_DETAIL: 
        return { 
          ...state, 
          gameDetail: [], 
        };
    case FILTER:
      return{
        ...state,
        allGames: payload === "allGenres"?
          [...state.gameCopy]
          : state.gameCopy.filter(game => game.genres?.some( genre=> genre.name=== payload))
      }
     
    case ORDER:
      const allGamesOrder  = [...state.allGames]
      return{
        ...state,
        allGames: 
        payload === "default"? 
        [ ...state.gameCopy ]
        :payload === "A" ?allGamesOrder.sort((a , b) => a.name.localeCompare(b.name))
        :payload === "D" ?allGamesOrder.sort((a, b) => b.name.localeCompare(a.name)) 
        :[ ...state.gameCopy ]
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;