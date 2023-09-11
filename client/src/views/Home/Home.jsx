import { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGameByName, getGames, getGenres} from "../../redux/actions"


import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./home.style.css";
import Loading from "../../components/Loading/Loading";
import Results from "./Results/Results";
// import Filter from "./Filter/Filter";


const Home = ()=>{
    const dispatch = useDispatch();
    const allGames = useSelector((state)=>state.allGames); 

    const [searchString, setSearchString] = useState("");

      

    //Filtro con el backend
    const handleChange = (event)=>{
        event.preventDefault()
        setSearchString(event.target.value)
            
    }; 
    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(getGameByName(searchString))
    }
    
    useEffect(()=>{
        if(allGames.length === 0){
            dispatch(getGames())
        }
    },[])//como esta vacio solo se ejecuta una vez

    return(
        <>
        {allGames ? (
        <div className="home">
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            {/* <Filter /> */}
            <Results />
            <Footer /> 
        </div>
        ) : (
            <Loading />
          )}
        </>
    )
};

export default Home;