# Challenge: Module 2, Clip 5

## Different Git Providers

There are multiple Git providers you can push starters to:

- [GitLab](https://gitlab.com)
- [BitBucket](https://bitbucket.org)
- [Azure Repos](https://azure.microsoft.com/en-us/services/devops/)

## Using repository URLs in `gatsby new`

To use a different Git provider, you can pass the URL to `gatsby new` and it should work the same.

```
$ gatsby new my-site https://gitlab.company.com/namespace/project.git
```

Some shortcuts like `org/repo` won't work as it assumes GitHub by default.