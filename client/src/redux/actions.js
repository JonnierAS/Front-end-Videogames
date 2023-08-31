import axios from "axios";


import { GET_GAMES, GET_BY_NAME, API_KEY } from "./types";


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

