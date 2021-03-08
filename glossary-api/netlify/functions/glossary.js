const api = {
  glossary: [
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
