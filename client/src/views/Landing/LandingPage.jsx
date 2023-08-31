import "./Landing.css"
import img from "./videogame.png"
import { NavLink } from "react-router-dom";

const LandingPage = ()=>{

    return(
        <div className="landing">
            <h1>Welcome to JasosPlay</h1><br/>
            <img src={img} alt="landing" />
            <NavLink to={"/home"}>
            <button className="btn">START</button>
            </NavLink> 

        </div>
    )
};


export default LandingPage;