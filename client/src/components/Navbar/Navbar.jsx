import styles from "./navbar.module.css"
import { NavLink,useNavigate } from "react-router-dom";


const Navbar = ({handleChange, handleSubmit})=>{
    
    const navigate = useNavigate();
    return(
        <div className={styles.containerNav}>
         <div className={styles.nav}>
            <div className={styles.link_group}>
                <h1 className={styles.titleNav} title="Landing Page" onClick={() => navigate("/")}>Let'sPlay</h1>
                <NavLink to="/create" className={styles.createBtn}>
                 <h2 title="Form" >Create a game!</h2>
                 </NavLink>
                 
            </div>
            {/* <Filter /> */}
             <div className={styles.searMain}>
                  <form onSubmit={handleSubmit}>
                     <input onChange={handleChange} className={styles.searchBox} placeholder="Search a game" type="text" />
                     <button className={styles.btnForm} onSubmit={handleSubmit} type="submit"  >
                     <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     height="1em" 
                     viewBox="0 0 512 512"
                     className={styles.search}
                     >
                    <path fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg></button>
                 </form>
             </div>
          </div>
        </div>
    )
};

export default Navbar;