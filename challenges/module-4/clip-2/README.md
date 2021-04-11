# Challenge: Module 4, Clip 2

## Write unit tests for the plugin

It's always a good idea to test plugin logic with unit tests and there's nothing technically different with testing Gatsby plugins vs. regular Node.js-based code.

However, it may not be apparent at first how to deal with passing the Gatsby helpers or other arguments to the APIs. I prefer to use Jest mocks so that I can set them up to return the values I expect during the test.

See [gatsby-node.test.js] for an example Jest test suite that validates the source plugin calls fetch on the right endpoint and creates the correct nodes.

You can run it by copying the file into the repository and running `npx jest gatsby-node`.