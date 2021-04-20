# Creating Plugins, Themes and Starters with GatsbyJS: Playbook Pluralsight Course

This repository is for the Pluralsight course **[Creating Plugins, Themes and Starters with GatsbyJS: Playbook]($COURSE_LINK$)**. The license is Apache 2.0.

[![Course overview screenshot]($COURSE_HERO_IMAGE$)]($COURSE_LINK$)

## Table of Contents

1. [Where to Start](#where-to-start)
1. [Errata](#errata)
1. [Updates](#updates)
1. [Additional Resources](#additional-resources)

## Where to Start

- [Globomantics Starter Demo](https://github.com/kamranayub/pluralsight-gatsby-demo-starter) - The starter we build in the course, which is hosted on Gatsby Cloud and uses Contentful as the CMS
- [Globomantics Glossary API](https://pluralsight-globomantics-glossary-api.netlify.app/.netlify/functions/glossary) - The "internal" API endpoint for the Glossary page and transformer plugin we build

### Challenges

The challenges at the end of some clips have notes and proposed solutions under the `challenges` folder. If you are stuck, you can reference them for help! You can also share what you ended up doing or ask for help in the [Discussions](discussions) area.

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
