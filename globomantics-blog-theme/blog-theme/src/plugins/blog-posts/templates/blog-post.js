import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import sortBy from "lodash/sortBy";
import reverse from "lodash/reverse";
import Img from "gatsby-image";
import Head from "../../../components/head";

import styles from "./blog-post.module.css";
import heroStyles from "../../../components/hero.module.css";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const terms = reverse(
      sortBy(get(post, "body.childGlossaryTermRefs.terms"), "count")
    );

    return (
      <div style={{ background: "#fff" }}>
        <Head title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: "block",
            }}
          >
            published {post.publishDate} by <strong>{post.author.name}</strong>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <hr />
          <h3>Glossary</h3>
          <dl class={styles.glossary}>
            {terms.map(({ term }) => (
              <>
                <dt>
                  {term.abbreviation} ({term.name})
                </dt>
                <dd>{term.description}</dd>
              </>
            ))}
          </dl>
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
        childGlossaryTermRefs {
          terms {
            count
            term {
              abbreviation
              name
              description
            }
          }
        }
      }
      author {
        name
      }
    }
  }
`;
