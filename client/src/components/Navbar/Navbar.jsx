import "./Navbar.style.css"

const Navbar = ()=>{
    return(
        <div className="searchBox">
            <form>
                <input placeholder="Busquedad" />
                <button>Buscar</button>
            </form>
           
        </div>
    )
};

export default Navbar;