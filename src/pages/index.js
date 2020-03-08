import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <Link to="/blog/">Blog</Link>
  </Layout>
)
