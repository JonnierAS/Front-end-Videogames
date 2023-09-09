import Card from "../Card/Card"
import style from "./cards.module.css"

const Cards = ({visibleGames})=>{
  const gameList = visibleGames;
  
    return(
        <div className={style.containerd}>
          {gameList?.map(game=>
            
              <Card key={game.name} game={game}/>
            
          )}
        </div>
    )
};

export default Cards;