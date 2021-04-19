/**
 * Validate plugin options
 */
exports.pluginOptionsSchema = ({ Joi }) =>
  Joi.object({
    authorId: Joi.string().required(),
    blogPathPrefix: Joi.string(),
  });

exports.onPreInit = ({ reporter }) =>
  reporter.info("Initialized blog-posts plugin");

/**
 * Dynamically create pages for blog posts
 */
exports.createPages = async ({ reporter, graphql, actions }, pluginOptions) => {
  const { createPage } = actions;
  const { authorId, blogPathPrefix = "/blog" } = pluginOptions;

  const blogPost = require.resolve("./templates/blog-post.js");
  const result = await graphql(
    `
      query AuthorPosts($authorId: String) {
        allContentfulBlogPost(
          filter: { author: { contentful_id: { eq: $authorId } } }
        ) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `,
    {
      authorId,
    }
  );

  if (result.errors) {
    console.log(result.errors);
    reporter.panic("Could not retrieve blog posts");
    return;
  }

  const posts = result.data.allContentfulBlogPost.edges;
  posts.forEach((post) => {
    createPage({
      path: `${blogPathPrefix}/${post.node.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.slug,
      },
    });
  });

  reporter.info(`Generated ${posts.length} blog posts using template`);
};
