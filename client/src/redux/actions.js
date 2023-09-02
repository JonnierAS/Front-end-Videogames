import axios from "axios";


import { GET_GAMES, GET_BY_NAME, GET_BY_ID} from "./types";


export const getGames = ()=>{//`https://api.rawg.io/api/games?key=${API_KEY}`
    return async dispatch =>{
       const response= await axios.get(`http://localhost:3001/videogames`);
        
       return dispatch({
        type: GET_GAMES,
        payload :response.data
       })
    }
}


export const getGameByName = (name)=>{
    return async dispatch =>{
       const response= await axios.get(`http://localhost:3001/videogames/?name=${name}`);
       return dispatch({
        type: GET_BY_NAME,
        payload: response.data
       })
    }
}


export const getGameById = (id) =>{
    return async (dispatch) => {
        try {
          const response = await axios.get(`http://localhost:3001/videogames/${id}`);
          dispatch({
            type: GET_BY_ID,
            payload: response.data,
        });
        
        } catch (error) {
          console.error(error);
        }
      };
};

