const api = {
  glossary: [
    {
      abbreviation: "CMS",
      name: "Content Management System",
      description:
        "A tool used to manage content, usually allowing custom fields and object types, which handles references, media, and more.",
    },
    {
      abbreviation: "COPE",
      name: "Create Once, Publish Everywhere",
      description:
        "A term used to describe the experience of only authoring a piece of content once with the ability to publish it on any medium without modifying it.",
    },
    {
      abbreviation: "GJS",
      name: "GatsbyJS",
      description: "The name of a popular site generator",
    },
    {
      abbreviation: "JAM",
      name: "Just Another Mountain",
      description:
        "What we call big obstacles when paving the road to the future",
    },
    {
      abbreviation: "MAATT",
      name: "Much Ado About Time Travel",
      description: "A codename for a secret project dealing with time travel",
    },
    {
      abbreviation: "WYSIWYG",
      name: "What You See Is What You Get",
      description:
        "A term used in the context of visual editors to mean that what you see is what your users see",
    },
  ],
};

exports.handler = async function (event, context) {
  // Require API key
  if (!event.queryStringParameters.apiKey) {
    return {
      statusCode: 400,
      body: "Missing apiKey",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(api, null, 2),
  };
};
