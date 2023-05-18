/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Simply Recipes`,
    description: `Nice and clean recipes site`,
    twitter: `@alan`,
    author: {
      name: "alanones",
      age: 75,
    },
    simpleData: ["item 1", "item2"],
    completeData: [
      {
        name: "alan",
        age: 32,
      },
      {
        name: "susan",
        age: 21,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xcq177x2zf7b`,
        accessToken: process.env.CONTENTIFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
};
