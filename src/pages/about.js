import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import { SEO } from "../components/SEO";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Us.</h2>
            <p>
              Ex do pariatur veniam do. Nisi occaecat quis id nisi sit irure. Incididunt officia dolor officia aute sint
              qui. Sint sit commodo dolore do veniam do cupidatat. Quis non ex mollit officia excepteur excepteur labore
              pariatur elit.
            </p>
            <p>
              Eu duis irure et commodo id exercitation nulla excepteur cupidatat id proident aliquip irure. Consectetur
              et esse nulla in adipisicing incididunt dolor ullamco minim velit qui voluptate.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bow"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome souce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(sort: { title: ASC }, filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export const Head = () => <SEO title="About" />;
export default About;
