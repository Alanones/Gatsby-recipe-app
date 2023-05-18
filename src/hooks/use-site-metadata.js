import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          author {
            name
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
