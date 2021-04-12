/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = ({ reporter }) =>
  reporter.info("Initialized gatsby-transformer-globomantics-glossary");

exports.onCreateNode = async ({
  actions,
  node,
  createNodeId,
  createContentDigest,
  getNodesByType,
  reporter,
}) => {
  // Only transform Contentful blog posts
  if (node.internal.type !== `contentfulBlogPostBodyTextNode`) {
    return;
  }

  // Get available Glossary terms created by glossary source plugin
  const terms = getNodesByType("GlossaryTerm");

  // Find matching abbreviations in the blog post content body
  const content = node.body;
  const termReferences = terms
    .map((term) => {
      const termMatcher = new RegExp(`\\W${term.abbreviation}\\W`, "g");
      const termMatches = [...content.matchAll(termMatcher)];

      if (termMatches.length) {
        return { term___NODE: term.id, count: termMatches.length };
      } else {
        return false;
      }
    })
    .filter(Boolean);

  // Associate term references to blog post text node
  const GLOSSARY_REFS_NODE_TYPE = "GlossaryTermRefs";
  const termReferencesNode = {
    id: createNodeId(`${node.id} ${GLOSSARY_REFS_NODE_TYPE}`),
    terms: termReferences,
    internal: {
      contentDigest: createContentDigest(termReferences),
      type: GLOSSARY_REFS_NODE_TYPE,
    },
  };

  const { createNode, createParentChildLink } = actions;
  createNode(termReferencesNode);
  createParentChildLink({ parent: node, child: termReferencesNode });

  reporter.info(
    `Linked ${termReferences.length} ${GLOSSARY_REFS_NODE_TYPE} to contentfulBlogPostBodyTextNode ${node.id}`
  );
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type GlossaryTermRefs implements Node {
      terms: [GlossaryTermRef!]
    }

    type GlossaryTermRef {
      term: GlossaryTerm!
      count: Int!
    }
  `);
};
