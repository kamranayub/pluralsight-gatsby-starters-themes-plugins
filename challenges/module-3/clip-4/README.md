# Challenge: Module 3, Clip 4

## Add more metadata

To expose the author ID and Contentful space ID, you can assign the metadata properties to the `process.env` variables. 

Apply the [example patch](meta-plugin.patch) with `git apply`:

```sh
$ cd pluralsight-gatsby-demo-starter

$ git switch module-3-onpostbuild

$ git apply meta-plugin.patch
```