const React = require("react");
const Layout = require("./src/components/layout").default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

exports.onRenderBody = ({ setHeadComponents }, { authorId }) => {
  setHeadComponents([<meta key="author" name="author" content={authorId} />]);
};
