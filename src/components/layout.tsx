/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Helmet from "react-helmet";
import Social from "./social";

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
    render={data => (
      <>
        <Helmet>
          {
            //@ts-ignore
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-6jHF7Z3XI3fF4XZixAuSu0gGKrXwoX/w3uFPxC56OtjChio7wtTGJWRW53Nhx6Ev" crossorigin="anonymous"></link>
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
            <div className="columns">
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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
