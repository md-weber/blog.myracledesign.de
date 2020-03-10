import React from "react"
import Layout from "../components/layout/layout"
import useSiteMetadata from "../hooks/use-site-medadata"

export default ({ location }) => {
  const { title } = useSiteMetadata()

  return <Layout location={location} title={title}>

  </Layout>
}

