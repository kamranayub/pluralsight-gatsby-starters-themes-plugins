// Add each API to an array
// See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
const gatsbyNodeApis = [
  "createPages",
  "createPagesStatefully",
  "createResolvers",
  "createSchemaCustomization",
  "onCreateBabelConfig",
  "onCreateDevServer",
  "onCreateNode",
  "onCreatePage",
  "onCreateWebpackConfig",
  "onPostBootstrap",
  "onPostBuild",
  "onPreBootstrap",
  "onPreBuild",
  "onPreExtractQueries",
  "onPreInit",
  "pluginOptionsSchema",
  "preprocessSource",
  "resolvableExtensions",
  "setFieldsOnGraphQLNodeType",
  "sourceNodes",
  "unstable_shouldOnCreateNode",
];

// Loop through and assign exports.<api> to a function that logs
// that it was called
gatsbyNodeApis.forEach((api) => {
  exports[api] = () => {
    console.log("gatsby-node api:", api);
  };
});
