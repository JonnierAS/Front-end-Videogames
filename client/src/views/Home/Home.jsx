import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGameByName, getGames} from "../../redux/actions"

import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import "./home.style.css";


const Home = ()=>{

    const dispatch = useDispatch();
    const games = useSelector((state)=>state.allGames);
    const [searchString, setSearchString] = useState("");
   
    const handleChange = (event)=>{
        setSearchString(event.target.value)
            
    }; 
    //Filtro con la backend

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(getGameByName(searchString))
    }
    


    // filtro sobre el estado
    // const [filtered, setFiltered] = useState(games);
    // const [searchString, setSearchString] = useState("");

    // const handleChange = (event)=>{
    //     // event.preventDefault()
    //     setSearchString(event.target.value)
    // };

    // const handleSubmit=()=>{
    //     event.preventDefault();
    //     const filteredGame = games.filter(game => game.name.includes(searchString))
    //     setFiltered(filteredGame)//modifica el stado local con los games que coincidieron
    // }
   
    useEffect(()=>{
        dispatch(getGames());
    /* return(()=>{  //SI entramos al detalle de un juego y nos salimos no queremos que se guarde
        crearDetail()  //para limpiar el estado cuando nos salgamos de la pagina
    }) */
    },[dispatch])

    return(
        <div className="home">
            <h2 className="homeTitle">Home</h2>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Cards games={games} />
        </div>
    )
};

export default Home;