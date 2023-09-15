import styles from './Loading.module.css'
import img from "../../../img/loading.gif"
const Loading = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.wait_sign_container}>
        <h2 className={styles.text}>Wait while we bring back our data...</h2>
        <img src={img} alt="gif" className={styles.spinner}/>
      </div>
    </div>
  )
}

export default Loading