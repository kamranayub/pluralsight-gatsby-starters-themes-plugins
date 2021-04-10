# Challenge: Module 2, Clip 3
## Externalize config

### Passing env vars via CLI

In Node.js projects, to pass environment variables to `gatsby develop` or `gatsby build` you can pass them via the command line on Linux:

    CONTENTFUL_SPACE_ID=abc123 npm run dev

In order to support Windows, you can use the [cross-env](https://npmjs.com/package/cross-env) npm package to set variables across platforms:

    cross-env CONTENTFUL_SPACE_ID=abc123 npm run dev

### Setting env vars in profile

On Linux-flavored operating systems you can set environment variables using your shell, [such as bash](https://www.stefaanlippens.net/bashrc_and_others/), within the shell profile:

**.bashrc** / **.bash_profile**

```
export CONTENTFUL_SPACE_ID=abc123
```

On Windows, you can also set environment variables for the PowerShell prompts using [profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.1):

**Microsoft.PowerShell_profile.ps1**

```
$env:CONTENTFUL_SPACE_ID="abc123"
```

And at an even-higher level, Windows let's you [set machine or user environment variables in System Properties](https://www.howtogeek.com/51807/how-to-create-and-use-global-system-environment-variables/).
