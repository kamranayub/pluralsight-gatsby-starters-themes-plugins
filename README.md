# Creating Plugins, Themes and Starters with GatsbyJS: Playbook Pluralsight Course

This repository is for the Pluralsight course [Creating Plugins, Themes and Starters with GatsbyJS: Playbook](http://bit.ly/PSCustomizingGatsby). The license is Apache 2.0.

[![Course overview](https://user-images.githubusercontent.com/563819/115808029-4d838000-a3af-11eb-9b53-459815f3069d.png)](http://bit.ly/PSCustomizingGatsby)

## Where to Start

### Materials

- **notheme-starter** - The Globomantics starter in its pre-theme form
- **theme-starter** - The Globomantics starter in its final theme form
- **glossary-source-plugin** - The source plugin that fetches data from Glossary API
- **glossary-transformer-plugin** - The transformer plugin that links Glossary terms to blog posts
- **globomantics-blog-theme** - The final theme
- **challenges** - All the challenges with notes/solutions

### Challenges

The challenges at the end of some clips have notes and proposed solutions under the `challenges` folder. If you are stuck, you can reference them for help! You can also share what you ended up doing or ask for help in the [Discussions](discussions) area.

### Pull Requests

To see the state of each clip/feature built out as it was in the course videos, you can look through the [Pull Requests](https://github.com/kamranayub/pluralsight-gatsby-starters-themes-plugins/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed) of the repo or check out the [branches](https://github.com/kamranayub/pluralsight-gatsby-starters-themes-plugins/branches).

### Other Repos or Samples

Some code in Modules 2-3 in the course were done in the sample starter demo:

- [Globomantics Starter Demo](https://github.com/kamranayub/pluralsight-gatsby-demo-starter) - The starter we build in the course, which is hosted on Gatsby Cloud and uses Contentful as the CMS

### Glossary API

The Glossary API is not shown in-depth in the course but it is a few Netlify functions:

- [Globomantics Glossary API](https://pluralsight-globomantics-glossary-api.netlify.app/.netlify/functions/glossary?apiKey=123) - The "internal" API endpoint for the Glossary page and transformer plugin we build
- [Globomantics Marketing Glossary API](https://pluralsight-globomantics-glossary-api.netlify.app/.netlify/functions/glossary-marketing?apiKey=123) - The same endpoint but for the marketing organization

Each URL requires an `apiKey` query string but the value can be anything.

## Packages

### Installation

Each of the repos in the course _should_ have an `.npmrc` file like this:

```
@kamranayub:registry=https://npm.pkg.github.com
```

So any package references should resolve correctly. If you have any issues, you can use that same config entry in your `~/.npmrc` file if needed.

### Course Packages

Pre-release versions can be viewed that correspond to different PR numbers (e.g. `pr-9.*`). The patch after the PR represents fixes/pushes to the PR.

- **gatsby-theme-globomantics-blog**: The theme package we build in the course.
- **gatsby-source-globomantics-glossary**: The source plugin package that fetches data from the Glossary API.
- **gatsby-transformer-globomantics-glossary**: The transformer plugin package that associates glossary term nodes with Contentful blog posts.

These can be viewed in more detail under [the repo packages](https://github.com/kamranayub?tab=packages&repo_name=pluralsight-gatsby-starters-themes-plugins).

## Errata

_None yet_

Please report course issues using the [Issues](issues) page or ask questions in [Discussions](discussions).

## Updates

- **April, 2021**
  - Initial release 🎉

## Additional Resources

See the [Pluralsight Channel](https://bit.ly/PSCustomizingGatsbyResources) for all resources referenced in the course.
