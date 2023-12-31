import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import style from "./Filter.module.css"
import {filterGame, orderGame, filterByBD} from "../../../redux/actions"
import { getGenres } from "../../../redux/actions";



const Filter = ({setPage})=>{
    
    const dispatch = useDispatch();
    const [noResults, setNoResults] = useState(false);
    const allGames = useSelector(state => state.allGames)
    const allGenres = useSelector(state => state.allGenres)

   
    //NotFound
    useEffect(() => {
        // Si no hay resultados después de 10 segundos, cambia el estado a true
        const timer = setTimeout(() => {
          if (allGames.length === 0) {
            setNoResults(true);
          }else{
            setNoResults(false);
          }
        }, 6000);
        return () => {
            clearTimeout(timer);
          };
        }, [allGames]);


    useEffect(()=>{
        if(allGenres.length === 0){
            dispatch(getGenres());
        }
    }, [])
    
    
    const handleOrder = (event)=>{
       dispatch(orderGame(event.target.value));
    };

    const handleFilter = (event)=>{
        dispatch(filterGame(event.target.value));
        setPage(1);
    };

    const handleFilterBD = (event) => {
        dispatch(filterByBD(event.target.value))
        setPage(1);
    }

    

    return(
        <div >
            
            <div className={style.Filtercontainer}>
            <   button onClick={handleOrder} className={style.select} value="default">RESET</button>
            <select className={style.select} onChange={handleOrder}>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
            </select>
            
            <select  className={style.select} onChange={handleFilterBD}>
                <option value="All">ALL</option>
                <option value="created">DB</option>
                <option value="api">API</option>
            </select>


            <div className={style.genres_btn} >
                {noResults? (
                   <span value="allGenres" onClick={handleFilter} >
                   <p className={style.NotFound} > Please RESET and select other filter!</p>
               </span> 
                ): (
                    <span className={style.btn_genres_filter} value="allGenres" onClick={handleFilter} >
                    {allGenres?.map(genre=> {
                        return (
                            <button 
                            id={genre.id}
                            key={genre.id} value={genre.name}>{genre.name}</button>
                        )
                    })}
                </span>
                )}
            </div>
            </div>

            
        </div>
    )
};



export default Filter;