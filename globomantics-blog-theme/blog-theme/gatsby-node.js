/**
 * Override core pages created by Gatsby from /pages directory
 */
exports.onCreatePage = ({ page, actions }, { authorId }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,

      // authorId will now be passed as $authorId to GraphQL query arguments
      authorId,
    },
  });
};
