import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
};

export const Head = () => <SEO title="Error" />;

export default Error;
