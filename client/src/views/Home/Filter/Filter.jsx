import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import style from "./Filter.module.css"
import {filterGame, orderGame} from "../../../redux/actions"
import { getGenres } from "../../../redux/actions";

const Filter = ()=>{
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
        }, 10000);
        return () => {
            clearTimeout(timer);
          };
        }, [allGames]);


    useEffect(()=>{
        dispatch(getGenres());
    }, [])

    const handleOrder = (event)=>{
       dispatch(orderGame(event.target.value));
    };

    const handleFilter = (event)=>{
        dispatch(filterGame(event.target.value));
    };

    

    return(
        <div >
            <div className={style.Filtercontainer}>
            <   button onClick={handleOrder} className={style.select} value="default">RESET</button>
            <select className={style.select} onChange={handleOrder}>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
            </select>

            <div className={style.genres_btn} >
                {noResults? (
                   <span value="allGenres" onClick={handleFilter} >
                   {/* {allGenres?.map(genre=> {
                       return (
                           <button  id={genre.id}
                           key={genre.id} value={genre.name}>{genre.name}</button>
                       )
                   })} */}
                   <p className={style.NotFound} >Please RESET select another filter!</p>
               </span> 
                ): (
                    <span value="allGenres" onClick={handleFilter} >
                    {allGenres?.map(genre=> {
                        return (
                            <button  id={genre.id}
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