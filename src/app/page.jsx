import Image from "next/image"
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
        <Image src="/img.png" alt="" fill className={styles.img} />
        </div>
  )
}

export default Home