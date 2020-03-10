import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/use-site-medadata"

export default ({ location }) => {
  const { title } = useSiteMetadata()

  return <Layout location={location} title={title}>
    <Link to="/blog/">Blog</Link>
  </Layout>
}

