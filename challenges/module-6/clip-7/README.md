# Challenge: Module 6, Clip 7

## Shadow the glossary source

There are two ways to shadow theme plugins:

- For plugin files inside a `src` directory, specify the override file in your site's `src/<plugin name>` directory.
- For a plugin's `gatsby-*` files, you have to override the _entire_ plugin with a local plugin
  - _Technically_ this is not shadowing as Gatsby will search the `plugins` folder before searching `node_modules`. However, it does serve a similar purpose.

Since the `gatsby-source-globomantics-glossary` plugin uses `exports.endPointUrl` in the `gatsby-node.js` file, we have to use the second option.

You can see how I accomplished this by applying the patch file:

```sh
$ cd pluralsight-gatsby-demo-starter

$ git switch module-6-theme-shadowing

$ git apply marketing-glossary-plugin.patch
```

The marketing-version of the plugin will automatically override the theme's version of the plugin and I reuse the exported APIs of the `gatsby-node` file by spreading it.

> **Warning:** This is an advanced technique that should only be done when needing to override something critical that can't be fixed with a patch to the plugin itself. However, it does showcase the power of Gatsby's architecture.

> **Note:** `endPointUrl` generates a warning in the console because it is not a Gatsby API. This is just for demonstration purposes. It's best to only keep actual Gatsby APIs exported.