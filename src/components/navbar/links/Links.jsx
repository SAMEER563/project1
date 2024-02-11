import Link from "next/link"
import styles from "./links.module.css"

const Links = () => {
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
  return (
      <div>
        {links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        )))}
      </div>
  )
}

export default Links