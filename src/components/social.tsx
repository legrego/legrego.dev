import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function Social() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
              twitter
            }
          }
        }
      }
    `
  );

  const { social } = site.siteMetadata;

  return (
    <div className="icons social-icons">
      <span className="icon">
        <a href={`https://twitter.com/${social.twitter}`} title="Twitter">

          <i className="fab fa-twitter fa-lg" />
        </a>
      </span>
      <span className="icon">
        <a href={`https://github.com/${social.github}`} title="GitHub">
          <i className="fab fa-github fa-lg" />
        </a>
      </span>
    </div>
  )
}

export default Social;