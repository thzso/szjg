// import image from "../assets/images/orfeusz_a_kozlekedesi_muzeumban.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* <div id={styles.title}> */}
        <span id={styles.name}>Gergely J Szabó</span>
      
      {/* </div> */}
      {/* <img src={"http://localhost:8080/orfeusz_a_kozlekedesi_muzeumban.jpg"} alt="" /> */}
      {/* <img src={image} alt="" /> */}
    </div>
  );
};

export default Home;
