# Challenge: Module 4, Clip 6

## Add more doc blocks

[Descriptions](https://spec.graphql.org/June2018/#sec-Descriptions) (aka doc blocks) in GraphQL use triple quotes:

```graphql
"""
A simple GraphQL schema which is well described.
"""
type Query {
  """
  Translates a string from a given language into a different language.
  """
  translate(
    "The original language that `text` is provided in."
    fromLanguage: Language

    "The translated language to be returned."
    toLanguage: Language

    "The text to be translated."
    text: String
  ): String
}

"""
The set of languages supported by `translate`.
"""
enum Language {
  "English"
  EN

  "French"
  FR

  "Chinese"
  CH
}
```

And they can appear on schema types and fields to provide more documentation shown during introspection.

Apply the example patch to see how I documented the `GlossaryTerm` type:

```sh
$ cd pluralsight-gatsby-starters-themes-plugins

$ git switch module-4-source-plugin-createSchemaCustomization

$ git apply schema-docs.patch
```