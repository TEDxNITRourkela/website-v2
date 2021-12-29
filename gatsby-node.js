const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  // Create blog pages
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/components/templates/Event.jsx`);

  const result = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/events/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create post detail pages
  const events = result.data.allMdx.edges;

  events.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {},
    });
  });
};
