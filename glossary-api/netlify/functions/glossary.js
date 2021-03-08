const readFile = require("util").promisify(require("fs").readFile);

exports.handler = async function (event, context) {
  // Require API key
  if (!event.queryStringParameters.apiKey) {
    return {
      statusCode: 400,
      body: "Missing apiKey",
    };
  }

  const glossary = (await readFile("./glossary.json")).toString();

  return {
    statusCode: 200,
    body: glossary,
  };
};
