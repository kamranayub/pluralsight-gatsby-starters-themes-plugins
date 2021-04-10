# Challenge: Module 3, Clip 7

## Add more validation

To add a [Joi](https://npmjs.com/package/joi) rule to ensure the `blogPathPrefix` does not end with a slash, you can use the regex validation.

Apply the [example patch](plugin-schema.patch) using `git apply`:

```sh
$ cd pluralsight-gatsby-demo-starter

$ git switch module-3-plugin-schema

$ git apply plugin-schema.patch
```

**Note:** The pattern still allows the `/` default value.