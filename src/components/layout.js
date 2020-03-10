import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import useSiteMetadata from "../hooks/use-site-medadata"

const Layout = ({ location, title, children }) => {
  const { siteUrl } = useSiteMetadata()

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        height: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
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
