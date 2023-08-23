/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulPhotography {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulPhotography.edges.forEach((edge) => {
    createPage({
      path: `/photography/${edge.node.slug}`,
      component: path.resolve('./src/templates/photography.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
