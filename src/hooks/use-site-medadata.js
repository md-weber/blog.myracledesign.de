import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
            summary
          }
          social {
            github
            twitter
            youtube
          }
          siteUrl
        }
      }
    }
    `,
  )
  return site.siteMetadata
}

export default useSiteMetadata
