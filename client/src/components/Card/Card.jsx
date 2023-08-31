import "./card.style.css"

const Card = ()=>{
    return(
        <div className="container">
            <h2 className="title">Name</h2>
            <p className="genres">Genres:</p>
            <span className="span"></span>
            <p className="rating">Rating</p>

        </div>
    )
};

export default Card;