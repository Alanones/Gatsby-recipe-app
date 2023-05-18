import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import { SEO } from "../components/SEO";

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Est non anim incididunt nostrud culpa aliqua do minim laborum nulla duis ea. Aute esse sunt commodo
              aliquip cillum sint.
            </p>
            <p>
              Tempor labore id elit commodo eiusmod occaecat ipsum irure ullamco cupidatat. Ex commodo occaecat culpa in
              fugiat cupidatat excepteur.
            </p>
            <p>
              Id magna minim laborum veniam anim ex. Excepteur officia et nulla mollit. Tempor dolor officia labore ad
              incididunt tempor magna laboris minim incididunt quis consequat Lorem nostrud.
            </p>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/xlekvvlv" method="POST">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export const Head = () => <SEO />;

export default Contact;
