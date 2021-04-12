# Challenge: Module 5, Clip 3

## Show blog posts in Glossary

To show the the blog posts that contain a term within the Glossary page, we need to include a query that retrieves all the blog posts with their `slug`, `title`, and glossary term references.

Alternatively, we could also write transformer logic in the plugin to transform the `GlossaryTerm` nodes with the links to the blog post in the same fashion to make the data even easier to query.

In the patch example I take advantage of some [Lodash](https://lodash.com/) functions to do some processing of the query data to find the link references:

```sh
$ cd pluralsight-gatsby-demo-starter

$ git switch module-5-transformer-plugin

$ git apply glossary-posts.patch
```