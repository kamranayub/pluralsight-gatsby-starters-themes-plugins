const api = {
  glossary: [
    {
      abbreviation: "CASPER",
      name: "Content-Aware Spatial Perception Enhancement Reporting",
      description:
        "A top-secret project to discover paranormal activity within social networks",
    },
    {
      abbreviation: "FRANCO",
      name: "Fully Replicated Alternative-Nano-Corporeal Organism",
      description:
        "A project related to an NDA client for human life preservation beyond death",
    },
  ],
};

exports.handler = async function (event, context) {
  // Require API key
  if (!event.queryStringParameters.apiKey) {
    return {
      statusCode: 400,
      body: "Missing apiKey query string parameter",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(api, null, 2),
  };
};
