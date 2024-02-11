import styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Links from "./links/Links"


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>

       <Links />
    </div>
  )
}

export default Navbar