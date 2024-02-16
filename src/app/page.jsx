import Image from "next/image"
import styles from "./home.module.css"

const Home = () => {
  return (
   <div className={styles.container}>
     <div className={styles.item1}>
       <div className={styles.t1}>List of Restaurants</div>
       <div className={styles.lBar}>
       <span>regio de Montreal</span>
       <li>Laval </li>
       <li>Monteregie Ouest </li>
       <li>Rive Nord</li>
       <li>Lanaudiere</li>
       <li>Centre de Montreal</li>
       <li>Est de Montreal </li>
       <li>Ouest  de Montreal</li>
       <li>Monteregie Nord</li>
       <li>Rive Sud</li>
       <li>Autres regions du Quebec</li>
     </div>
     </div>
     <div className={styles.item2}>
      <div className={styles.midText}> Grande région de Montréal

      <Image src="/img.png" alt="" fill className={styles.midImg}/>
     </div>
    </div>
     <div className={styles.item3}>
      <Image src="/r_img.png" alt="" fill className={styles.rImg}/>
     </div>
     <div className={styles.item4}></div>
     <div className={styles.item5}></div>
     <div className={styles.item6}></div>
     <div className={styles.item7}></div>
     <div className={styles.item8}></div>
     <div className={styles.item9}></div>
   </div>
   
   )
  
}

export default Home