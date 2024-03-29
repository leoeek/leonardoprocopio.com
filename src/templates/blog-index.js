import { Link, graphql } from "gatsby";
import { formatPostDate, formatReadingTime } from "../utils/helpers";

import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Panel from "../components/Panel";
import React from "react";
import SEO from "../components/SEO";
import get from "lodash/get";
import { rhythm } from "../utils/typography";

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout
        lang={langKey}
        blogPost={false}
        location={this.props.location}
        title={siteTitle}
      >
        <SEO />
        <aside>
          <Bio lang={langKey} />
        </aside>
        <main>
          {posts.map(({ node }) => {
            const title = get(node, "frontmatter.title") || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: rhythm(1),
                      marginBottom: rhythm(1 / 4)
                    }}
                  >
                    <Link
                      style={{ boxShadow: "none" }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>
                    {formatPostDate(node.frontmatter.date, langKey)}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                    {node.frontmatter.updateDate &&
                      ` • 💥 ${
                        langKey === "pt-br" ? "Atualizado em" : "Updated"
                      }  ${formatPostDate(
                        node.frontmatter.updateDate,
                        langKey
                      )} 💥`}
                  </small>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </article>
            );
          })}
        </main>
        <Footer lang={langKey} />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            updateDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
