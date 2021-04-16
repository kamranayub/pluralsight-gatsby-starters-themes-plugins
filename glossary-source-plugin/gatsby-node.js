/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const fetch = require("node-fetch");

const GLOSSARY_NODE_TYPE = `GlossaryTerm`;
const GLOSSARY_ENDPOINT_URL =
  "https://pluralsight-globomantics-glossary-api.netlify.app/.netlify/functions/glossary";

exports.endPointUrl = GLOSSARY_ENDPOINT_URL;

exports.pluginOptionsSchema = ({ Joi }) =>
  Joi.object({
    apiKey: Joi.string().required(),
  });

exports.onPreInit = ({ reporter }) =>
  reporter.info("Initialized globomantics-glossary-source-plugin");

exports.sourceNodes = async (
  { actions, reporter, createNodeId, createContentDigest, cache },
  pluginOptions
) => {
  const { apiKey } = pluginOptions;

  const cacheKey = `${GLOSSARY_NODE_TYPE}-${apiKey}-Terms`;
  const cachedTerms = await cache.get(cacheKey);
  let terms;

  if (cachedTerms) {
    terms = cachedTerms;
  } else {
    const response = await fetch(`${exports.endPointUrl}?apiKey=${apiKey}`);
    const { glossary } = await response.json();

    terms = glossary;

    await cache.set(cacheKey, terms);
  }
  
  const { createNode } = actions;
  terms.forEach((term) => {
    createNode({
      ...term,
      id: createNodeId(`${GLOSSARY_NODE_TYPE}-${term.abbreviation}`),
      parent: null,
      children: [],
      internal: {
        type: GLOSSARY_NODE_TYPE,
        content: JSON.stringify(term),
        contentDigest: createContentDigest(term),
      },
    });
  });

  reporter.info(`Created nodes for ${terms.length} glossary terms`);
};
