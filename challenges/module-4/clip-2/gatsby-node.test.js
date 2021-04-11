const fetch = require("node-fetch");
const { sourceNodes } = require("./gatsby-node");

jest.mock("node-fetch");

const mockHelpers = {
  actions: {
    createNode: jest.fn(),
  },
  reporter: {
    info: jest.fn(),
  },
  createNodeId: jest.fn((id) => id),
  createContentDigest: jest.fn((content) => JSON.stringify(content)),
};

describe("gatsby-node: onSourceNode", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch from glossary endpoint and create source nodes for terms", async () => {
    const testTerm = {
      abbreviation: "TEST",
      name: "A test",
      description: "Just a test",
    };
    fetch.mockImplementation(() =>
      Promise.resolve({
        json() {
          return Promise.resolve({
            glossary: [testTerm],
          });
        },
      })
    );

    await sourceNodes(mockHelpers, { apiKey: "test" });

    expect(fetch).toHaveBeenCalledWith(
      "https://pluralsight-globomantics-glossary-api.netlify.app/.netlify/functions/glossary?apiKey=test"
    );
    expect(mockHelpers.actions.createNode).toHaveBeenCalledWith({
      ...testTerm,
      id: "GlossaryTerm-TEST",
      parent: null,
      children: [],
      internal: {
        type: "GlossaryTerm",
        content: JSON.stringify(testTerm),
        contentDigest: JSON.stringify(testTerm),
      },
    });
  });
});
