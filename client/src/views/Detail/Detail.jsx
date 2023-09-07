import { getGameById } from "../../redux/actions";
import styles from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

import img from "./home.png"

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const info = useSelector((state) => state.gameDetail[0]);
  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGameById(id));
    /* return(()=>{  //SI entramos al detalle de un juego y nos salimos no queremos que se guarde
        crearDetail()  //para limpiar el estado cuando nos salgamos de la pagina
    }) */
  }, [id]);

  

  return (
    <>
    {info ? (
    <div className={styles.main_container}>

      <img className={styles.img_container} src={info?.background_image} alt={info?.name} />
      <div className={styles.description_container}>
      <div className={styles.title_container}>
      <h1>{info?.name}</h1>
      <a className={styles.btnHome} onClick={() => navigate("/home")}><img src={img} title="Home" /></a>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{__html: info?.description}} />
      </div>
      <div className={styles.extra_data_container}>
        <ul>
        <li>
            <strong>Released: </strong>
            {info?.released
                  ? info?.released.split("-").reverse().join("/")
                  : "N/A"}
        </li>
        <li>
            <strong>Rating: </strong>{" "}
            {info?.rating ? info?.rating  : "N/A"}
        </li>
        <li>
            <strong>Genres: </strong>
            {info?.genres.map((g) => g.name).join(", ") || "Not Specified"}
        </li>
        <li>
            <strong>Platforms: </strong>
            {info?.platforms
                    ? info?.platforms.map((p) => p.platform.name).join(", ")
                    : "N/A"}

        </li>
        </ul>
      </div>
    </div>
    ) : (
      <Loading />
    )}
    </>
  );
};

export default Detail;
