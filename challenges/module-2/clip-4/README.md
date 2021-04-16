# Challenge: Module 2, Clip 4

## Prompt for Author ID

To adjust the starter `bin/setup.js` script to prompt for author ID, we can use the APIs in [inquirer](https://www.npmjs.com/package/inquirer). See the patch files in this folder for an example of the diff you can apply using Git at the root of the [pluralsight-gatsby-demo-starter repository](https://github.com/kamranayub/pluralsight-gatsby-demo-starter):

```sh
$ cd pluralsight-gatsby-demo-starter

$ git apply setup.authorId.patch
$ git apply gatsby-config.patch
```

This adds a new environment variable support for `CONTENTFUL_AUTHOR_ID` that is used during the setup script and for the `gatsby-config.js` file instead of hardcoding IDs.