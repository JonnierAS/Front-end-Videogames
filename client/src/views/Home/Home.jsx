import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import "./home.style.css";


const Home = ()=>{
    return(
        <div className="home">
            <h2 className="homeTitle">Home</h2>
            <Navbar />
            <Cards />
        </div>
    )
};

export default Home;