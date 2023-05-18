import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, children }) => {
  const { title: defaultTitle, description: defaultDescription, twitter } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    twitter,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitter} />
      {children}
    </>
  );
};
