import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Cards from "../../../components/Cards/Cards";
import NotFound from "../NotFound/NotFound";
import Loading from "../../../components/Loading/Loading";

const Results = () => {
  const dispatch = useDispatch();

  const allGames = useSelector((state) => state.allGames);
  const allGenres = useSelector((state) => state.allGenres);

  const [page, setPage] = useState(+window.sessionStorage.getItem("page") || 1);

  const numberOfCards = 15;
  const endPage = Math.ceil(allGames.length / numberOfCards);
  const startPage = (page - 1) * numberOfCards;
  const visibleGames = allGames.slice(startPage, startPage + numberOfCards);

  return (
    <div>
      {!allGames[0] ? (
          <Loading />
          ) : (
              <div>
            <button onClick={() => setPage(page - 1)}>back</button>
            <button onClick={() => setPage(page + 1)}>next</button>
          <div>
            <Cards visibleGames={visibleGames} />
          </div>
          <button onClick={() => setPage(page - 1)}>back</button>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
      )}
    </div>
  );
};

export default Results;
