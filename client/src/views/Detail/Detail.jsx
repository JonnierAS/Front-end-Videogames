import { getGameById, resetGameDetail } from "../../redux/actions";
import styles from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

import img from "../../../img/home.png"

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const info = useSelector((state) => state.gameDetail[0]);
  
  // console.log(info.platform);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGameById(id));
    return ()=>{
      dispatch(resetGameDetail())
    }
  }, [id]);


  return (
    <>
    {/* <Navbar /> */}
    {info ? (
      <div className={styles.main_container}>

      <img className={styles.img_container} src={info?.background_image} alt={info?.name} />
      <div className={styles.description_container}>
      <div className={styles.title_container}>
      <a className={styles.btnHome} onClick={() => navigate("/home")}><img src={img} title="Home" /></a>
      <h1>{info?.name}</h1>
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
            {info?.genres?.map((g) => g.name).join(", ") || info?.Genres?.map((g) => g.name).join(", ")}
        </li>
        <li>
            <strong>Platforms: </strong>
            {info?.platforms
                    ? info?.platforms?.map((p) => p.platform?.name).join(", ")
                    : info?.platform.map((p) => p.name).join(", a")}

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
