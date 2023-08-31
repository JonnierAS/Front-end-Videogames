import "./Navbar.style.css"

const Navbar = ({handleChange, handleSubmit})=>{
    return(
        <div className="searchBox">
            <form onChange={handleChange}>
                <input placeholder="Busquedad" type="search" />
                <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>
           
        </div>
    )
};

export default Navbar;