import axios from "axios";


import { GET_GAMES, GET_BY_NAME, GET_BY_ID, GET_GENRES, FILTER, ORDER,RESET_GAME_DETAIL, FILTER_BD } from "./types";


export const getGames = () => {//`https://api.rawg.io/api/games?key=${API_KEY}`
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames`);

      dispatch({
        type: GET_GAMES,
        payload: response.data
      })
    } catch (error) {
      console.log(error.response.data)
    }
  }
};

export const getGenres = () => {
  return async dispatch => {
    try {
      const response = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: GET_GENRES,
      payload: response.data
    })
    } catch (error) {
      console.log(error.response.data);
    }
  }
};




export const getGameByName = (name) => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames/?name=${name}`);
      return dispatch({
      type: GET_BY_NAME,
      payload: response.data
    })
    } catch (error) {
      console.log(error.response.data);
    }
  }
}


export const getGameById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames/${id}`);
      dispatch({
        type: GET_BY_ID,
        payload: response.data,
      });

    } catch (error) {
      console.error(error.response.data);
    }
  };
};

export const resetGameDetail = () => { 
  return { 
    type: RESET_GAME_DETAIL, 
  }; 
};


export const postGame = (state)=>{
  return async ()=>{
    try {
      await axios.post("http://localhost:3001/videogames/", state)
      alert("Successfully created game!")
    } catch (error) {
      alert(error.response.data);
    }
  }
}


export const filterGame = (genres) => {
  return {
    type: FILTER,
    payload: genres
  }
};

export const orderGame = (order) => {
  return {
    type: ORDER,
    payload: order
  }
};

export const filterByBD = (created) =>{
  return {
    type: FILTER_BD,
    payload : created
  }
}




