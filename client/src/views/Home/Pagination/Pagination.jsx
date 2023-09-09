import style from "./Pagination.module.css"

const Pagination = ({totalPages, page, setPage}) => {
    
    const goToPrevPage = () => {
        if (page !== 1) {
          setPage(page - 1);
          document.documentElement.scrollTop = 0; // desplaza la página al inicio
        }
      };
      const goToNextPage = () => {
        if (page < totalPages) {
          setPage(page + 1);
          document.documentElement.scrollTop = 0; 
        }
      };
      const goToPage = (number) => {
        setPage(number);
        document.documentElement.scrollTop = 0; 
      };

      const pageNumbers = []; 
      for (let i = 1; i <= totalPages; i++) { // llena el array con los números de página
        pageNumbers.push(i);
      }

  return (
    <div className={style.pageContain}>
        <div >
            <button  title="move" onClick={() => goToPage(1)}>Start</button>
            <button title="move" onClick={goToPrevPage}>Prev</button>
            {pageNumbers.map(number => ( // mapea el array de números de página
              <button key={number} className={`${style.page_btn} ${page === number && style.active_page}`} 
              title="move" onClick={() => goToPage(number)}>{number}
              </button>
            ))}
            <button title="move" onClick={goToNextPage}>Next</button>
            <button title="move" onClick={() => goToPage(totalPages)}>End</button>
      </div>
    </div>
  );
};



export default Pagination;