import Card from "../Card/Card"
import "./cards.style.css"

const Cards = ({games})=>{
  const gameList = games;
  
    return(
        <div className="containerd">
          {gameList?.map(game=>
            
              <Card key={game.name} game={game}/>
            
          )}
        </div>
    )
};

export default Cards;