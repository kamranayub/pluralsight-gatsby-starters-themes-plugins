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

const GLOSSARY_REFS_NODE_TYPE = "GlossaryTermRefs";

exports.onCreateNode = async ({
  actions,
  node,
  createNodeId,
  createContentDigest,
  getNodesByType,
  getNode,
  reporter,
}) => {
  // Only transform Contentful blog posts
  if (node.internal.type !== `ContentfulBlogPost`) {
    return;
  }

  const { createNode, createParentChildLink } = actions;

  // Get available Glossary terms created by glossary source plugin
  const terms = getNodesByType("GlossaryTerm");

  // Find matching abbreviations in the blog post content body
  const content = getNode(node.body___NODE).body;
  const matches = terms
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

  function transformContentfulBlogPost(terms, id, type) {
    const termRefsNode = {
      terms,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(terms),
        type,
      },
    };
    createNode(termRefsNode);
    createParentChildLink({ parent: node, child: termRefsNode });
  }

  // Create refs node to store any term matches
  transformContentfulBlogPost(
    matches,
    createNodeId(`${node.id} ${GLOSSARY_REFS_NODE_TYPE}`),
    GLOSSARY_REFS_NODE_TYPE
  );

  reporter.info(
    `Linked ${matches.length} ${GLOSSARY_REFS_NODE_TYPE} to ContentfulBlogPost ${node.id}`
  );
};
