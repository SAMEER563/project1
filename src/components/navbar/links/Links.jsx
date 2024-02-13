"use client"
import Link from "next/link"
import styles from "./links.module.css"
import Navlink from "./navlink/Navlink"
import { useState } from "react"

const links = [
    {
        title: "HomePage",
        path: "/",
    },
    {
        title: "Main Region",
        path: "/mainregion",
    },
    {
        title: "Region",
        path: "/region",
    },
    {
        title: "Connection",
        path: "/connection",
    },
    {
        title: "Blog",
        path: "/blog",
    },
]
const Links = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link=>(
            // 
            <Navlink item={link} key={link.title}/>
        )))}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {
        open && (
        <div className={styles.mobileLinks}>
            {links.map((link) => (
                <Navlink item={link} key={link.title}/>
            ))}
      </div>
      )}
      </div>
  )
}

export default Links