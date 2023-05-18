import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setUpTags from "../utils/setUpTags";
import slugify from "slugify";
import { SEO } from "../components/SEO";

const Tags = ({ data }) => {
  const newTags = setUpTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export const Head = () => <SEO title="Tags" />;
export default Tags;
