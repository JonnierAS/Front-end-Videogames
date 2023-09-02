import {Link} from "react-router-dom"
import "./card.style.css"

const Card = ({game})=>{

    const {name, rating, genres, background_image, id} = game;
    
    return(
        <>
            
        <div className="container">
            <img className="img_container" src={background_image} alt="img" />
            <h2 className="title">{name}</h2>
            <p className="genres">{genres?.map(genre => genre.name).join(", ")}</p>
            <Link to={`/game/${id}`}><span className="span"></span></Link>
            <p className="rating">{rating}</p>
        </div>
            
        </>
    )
};

export default Card;