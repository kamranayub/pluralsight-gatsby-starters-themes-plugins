# Challenge: Module 5, Clip 2

## Capture location of matches

When using [String.matchAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), you can access the `index` of a match and its `lastIndex`. Then, to store on the GraphQL node, we can adjust the return value to be an array of matches instead of only a count.

```
$ cd pluralsight-gatsby-starters-themes-plugins

$ git switch module-5-transformer-plugin

$ git apply term-matches.patch
```