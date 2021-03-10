import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import styles from "./glossary.module.css";
import Head from "../components/head";
import Layout from "../components/layout";

class GlossaryIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const terms = get(this, "props.data.glossary.terms");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Head title={siteTitle} />
          <div className={styles.hero}>Glossary</div>
          <div className="wrapper">
            <ul className={styles.glossaryList}>
              {terms.map(({ term }) => {
                return (
                  <li key={term.abbreviation}>
                    <strong>{term.abbreviation}</strong> ({term.name}) &mdash;{" "}
                    {term.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryIndex;

export const pageQuery = graphql`
  {
    glossary: allGlossaryTerm {
      terms: edges {
        term: node {
          abbreviation
          description
          name
        }
      }
    }
  }
`;
