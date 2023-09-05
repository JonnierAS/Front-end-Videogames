import styles from "./NotFound.module.css";
import img from "../../../../img/notfound.png"

const NotFound = ()=>{
    return(
        <div className={styles.Not_container}>
            <div className={styles.content}>
                 <h1>Not Results</h1>
                 <hr />
                <div className={styles.info_container}>
                    <img src={img} alt="" />
                    <p>Try with order filter</p>
                </div>
            </div>
        </div>
    )
};

export default NotFound;