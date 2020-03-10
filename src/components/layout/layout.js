import React from "react"
import { Link } from "gatsby"
import NavigationBar from "../navigation/navigation-bar"

import { rhythm } from "../../utils/typography"
import useSiteMetadata from "../../hooks/use-site-medadata"
import layoutStyles from "./layout.module.css"

const Layout = ({ title, children }) => {
  const { siteUrl } = useSiteMetadata()

  let header

  header = (
    <h3 className={layoutStyles.header__logo}>
      <Link className={layoutStyles.header__logoLink} to={`/`}>
        {title}
      </Link>
    </h3>
  )
  return (
    <div
      className={layoutStyles.main__container}
      style={{
        maxWidth: rhythm(36),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header className={layoutStyles.header}>
        {header}
        <NavigationBar/>
      </header>
      <main
        style={{
          flexGrow: `1`,
        }}
      >
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href={siteUrl}>Flutter Explained</a>
      </footer>
    </div>
  )
}

export default Layout
