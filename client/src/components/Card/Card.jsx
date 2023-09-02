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
            <Link to={`/game/${id}`}><span className="span" aria-hidden><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z" clipRule="evenodd" />
        </svg>Click the card</span></Link>
            <p className="rating">{rating}</p>
        </div>
            
        </>
    )
};

export default Card;