import Image from "next/image"
import styles from "./home.module.css"

const Home = () => {
  return (
   <div className={styles.container}>
    <div className={styles.sideBar}>
      <div className={styles.panel}>List of Restaurents
        {/* <Image src="/icon.png" alt="" fill className={styles.panelImg}/> */}
      </div>
        {/* <div className={styles.panelText}>

        <ul>sfdhgoi</ul>
        <ul>sfdhgoi</ul>
        <ul>sfdhgoi</ul>
        <ul>sfdhgoi</ul>
        <ul>sfdhgoi</ul>
        <ul>sfdhgoi</ul>
        <ul>sfdhgoi</ul>
        </div> */}
       
     
    </div>
    <div className={styles.midBar}>
    <Image src="/img.png" alt="" fill className={styles.midImg} />
    </div>
    <div className={styles.rightBar}>
      <Image src="/r_img.png" alt="" fill  className={styles.rImg}>
      </Image>
    </div>
   </div>
   
   )
  
}

export default Home