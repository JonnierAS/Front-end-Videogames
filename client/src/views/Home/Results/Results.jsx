import { useSelector } from "react-redux";
import { useState } from "react";

import Cards from "../../../components/Cards/Cards";
import Pagination from "../Pagination/Pagination";
import Loading from "../../../components/Loading/Loading";
import Filter from "../Filter/Filter";


const Results = () => {

  const allGames = useSelector((state) => state.allGames);

  const numberOfCards = 15;
  const [page, setPage] = useState(1);
  


  const totalPages = Math.ceil(allGames.length / numberOfCards);
  const startPage = (page - 1) * numberOfCards;
  const visibleGames = allGames.slice(startPage, startPage + numberOfCards);
  
  
  return (
    <div>
      <Filter  setPage={setPage}/>
      {!allGames[0] ? (
        <Loading />
      ) : (
        <div>
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />

          <div>
            <Cards visibleGames={visibleGames} />
          </div>
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default Results;
