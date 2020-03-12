import React from "react"
import Layout from "../components/layout/layout"
import useSiteMetadata from "../hooks/use-site-medadata"
import YoutubeCarousel from "../components/youtube-carousel/youtube-carousel"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
})


export default ({ location }) => {
  const { title } = useSiteMetadata()

  return <ThemeProvider theme={theme}>
    <Layout location={location} title={title}>
      <YoutubeCarousel/>
    </Layout>
  </ThemeProvider>
}

