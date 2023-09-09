import "./Landing.css";
import img from "../../../img/videogame.png";
import img2 from "../../../img/bola.png";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
      <div className="main_container_Landing">
        <span className="login_circuit-mask"></span>
        <span className="login_circuit-mask2"></span>
      <img className="img" src={img} alt="landing" />
      <img className="img3" src={img2} alt="landing" />
      <div className="bodi_landin">
        <div className="login">
          <h1 className="titles">Let'sPlay</h1>
          <br />
          {/* <h1 className="login_heading">Iniciar sesion</h1>   */}
          <div className="containbtn">
          <NavLink  to={"/home"}>
            <button  className="btn">START</button>
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
