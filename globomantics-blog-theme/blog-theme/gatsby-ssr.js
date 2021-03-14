const React = require("react");
const Layout = require("./src/components/layout").default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="keywords"
      name="keywords"
      content="blog,globomantics,gatsby,robotics,future,ai,machine learning"
    />,
    <meta
      key="description"
      name="description"
      content="Blogs from Globomantics employees on technology and other topics"
    />,
  ]);
};
