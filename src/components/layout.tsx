/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Helmet from "react-helmet";
import Header from "./header"
import "./layout.scss"
import Social from "./social";

function renderFn(children) {
  return (data) => (<>
    <Helmet>
      {
        // @ts-ignore
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-6jHF7Z3XI3fF4XZixAuSu0gGKrXwoX/w3uFPxC56OtjChio7wtTGJWRW53Nhx6Ev" crossorigin="anonymous" />
      }
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      className="section"
    >
      <div className="container">
        <main>{children}</main>
      </div>

      <footer className="footer">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <p>© {data.site.siteMetadata.author}</p>
          </div>
          <div className="column">
            <div className="content is-pulled-right">
              <Social />
            </div>
          </div>
        </div>
      </footer>

    </div>
  </>);
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            social {
              twitter
              github
            }
          }
        }
      }
    `}
    render={renderFn(children)}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
