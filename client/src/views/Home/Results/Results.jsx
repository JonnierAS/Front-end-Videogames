import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Cards from "../../../components/Cards/Cards";
import Pagination from "../Pagination/Pagination";
import Loading from "../../../components/Loading/Loading";

const Results = () => {
  const dispatch = useDispatch();

  const allGames = useSelector((state) => state.allGames);
  const allGenres = useSelector((state) => state.allGenres);

  const numberOfCards = 15;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allGames.length / numberOfCards);
  const startPage = (page - 1) * numberOfCards;
  const visibleGames = allGames.slice(startPage, startPage + numberOfCards);
  
  
  return (
    <div>
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
