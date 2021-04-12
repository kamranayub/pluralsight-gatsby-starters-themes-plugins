# Challenge: Module 6, Clip 4

## Add a `pathPrefix` option

The theme already includes this as an option you can reference, see `globomantics-blog-theme\blog-theme\gatsby-config.js`.

```diff
module.exports = ({ 
  authorId, 
  title = "Globomantics Engineering Blog", 
+ pathPrefix 
}) => ({
  siteMetadata: {
    title,
    authorId,
  },
+ pathPrefix,
  plugins: [
```