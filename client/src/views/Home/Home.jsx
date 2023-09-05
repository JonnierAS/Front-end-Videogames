import { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGameByName, getGames} from "../../redux/actions"


import Navbar from "../../components/Navbar/Navbar";
import "./home.style.css";
import Loading from "../../components/Loading/Loading";
import Results from "./Results/Results";


const Home = ()=>{
    const dispatch = useDispatch();
    const allGames = useSelector((state)=>state.allGames); 
    const [searchString, setSearchString] = useState("");
    
    //Filtro con la backend
    const handleChange = (event)=>{
        event.preventDefault()
        setSearchString(event.target.value)
            
    }; 
    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(getGameByName(searchString))
    }
    
    useEffect(()=>{
        dispatch(getGames());
    },[])

    return(
        <>
        {allGames ? (
        <div className="home">
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Results /> 
        </div>
        ) : (
            <Loading />
          )}
        </>
    )
};

export default Home;