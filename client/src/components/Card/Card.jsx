import {Link} from "react-router-dom"
import style from "./card.module.css"

const Card = ({game})=>{

    const {name, rating, genres, background_image, id} = game;
    
    return(
        <>  
        <div className={style.container}>
            <img className={style.img_container} src={background_image} alt="img" />
            <span className={style.span}></span>
             <p className={style.span}><Link className={style.tex_link} to={`/game/${id}`}>Click here to see the detail!</Link></p>
            <h2 className={style.title}>{name}</h2>
            <p className={style.genres}>{genres?.map(genre => genre.name).join(", ")}</p>
            <p className={style.rating}>{rating}</p>
        </div>     
        </>
    )
};

export default Card;