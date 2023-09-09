import style from "./Landing.module.css";
import img from "../../../img/videogame.png";
import img2 from "../../../img/bola.png";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
      <div className={style.main_container_Landing}>
        <span className={style.login_circuit_mask} />
        <span className={style.login_circuit_mask2}/>
      <img className={style.img} src={img} alt="landing" />
      <img className={style.img3} src={img2} alt="landing" />
      <div className={style.bodi_landin}>
        <div className={style.login}>
          <h1 className={style.titles}>Let'sPlay</h1>
          <br />
          {/* <h1 className="login_heading">Iniciar sesion</h1>   */}
          <div className={style.containbtn}>
          <NavLink  to={"/home"}>
            <button  className={style.btn}>START</button>
          </NavLink></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
{
  /* <div className="landing">
            <h1 className="titles">Let'sPlay</h1><br/>
            <img className="img" src={img} alt="landing" />
            <NavLink to={"/home"}>
            <button className="btn">START</button>
            </NavLink> 

        </div> */
}
