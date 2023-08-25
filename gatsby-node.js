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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const collections = graphql(`
  query {
    allContentfulPhotography {
      edges {
        node {
          slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allContentfulPhotography.edges.forEach(({ node }) => {
      createPage({
        path: `/photography/${node.slug}`,
        component: path.resolve('./src/templates/photography.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  })

  const posts = graphql(`
  query {
    allContentfulDesign {
      edges {
        node {
          slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allContentfulDesign.edges.forEach(({ node }) => {
      createPage({
        path: `/work/${node.slug}`,
        component: path.resolve('./src/templates/work.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  })

  return Promise.all([collections, posts])
};
