# Challenge: Module 6, Clip 2

## Add workspace dev command

We can copy the `build` script and modify it to execute the `dev` command in the `example` package folder:

```diff
{
  "name": "gatsby-starter-theme-workspace",
  "private": true,
  "version": "0.0.1",
  "main": "index.js",
  "license": "0BSD",
  "scripts": {
+   "dev": "yarn workspace example dev",
    "build": "yarn workspace example build"
  },
  "workspaces": [
    "gatsby-theme-minimal",
    "example"
  ]
}
```