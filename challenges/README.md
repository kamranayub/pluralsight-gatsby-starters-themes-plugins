# Course Challenges

Some modules and clips contain challenges and this folder holds the examples or solutions.

Some solutions are documentation-oriented and others are source code changes. For any course code changes, the challenge has a `.patch` file. These are meant to be applied against the same code shown in the course. Each challenge will list the repository and branch where you can test the code.

Patch files can be applied using `git apply`:

```sh
$ git apply <path to .patch file>
```

They are meant to be run at the root of each repository mentioned in the challenge. You can also view the `.patch` files which presents a diff view, if you don't want to run them outright.