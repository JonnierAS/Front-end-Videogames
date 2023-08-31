import "./card.style.css"

const Card = ({game})=>{

    const {name, rating, genres, background_image} = game;

    return(
        <div className="container">
            <img className="img_container" src={background_image} alt="img" />
            <h2 className="title">{name}</h2>
            <p className="genres">{genres?.map(genre => genre.name).join(", ")}</p>
            <span className="span"></span>
            <p className="rating">{rating}</p>

        </div>
    )
};

export default Card;