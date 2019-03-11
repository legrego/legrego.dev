import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    };
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        description: string;
        date: string;
        version: string;
        repository: string;
      }
    }
  };
  pageContext: any;
  location: string;
}

class HomeAssistantComponentTemplate extends React.Component<Props, {}> {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1 className="title is-1">{post.frontmatter.title}</h1>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Version</span>
              <span className="tag is-primary">{post.frontmatter.version}</span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag">Last Updated</span>
              <span className="tag is-primary">{post.frontmatter.date}</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag repo-tag-first"><i className="fab fa-github fa-lg" /> Repository</span>
              <span className="tag is-primary repo-tag-second"><a href={`https://github.com/legrego/${post.frontmatter.repository}`} target="_blank">{post.frontmatter.repository}</a></span>
            </div>
          </div>
        </div>

        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default HomeAssistantComponentTemplate

export const query = graphql`
  query ComponentBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        version
        repository
      }
    }
  }
`