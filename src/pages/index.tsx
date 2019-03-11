import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`larry`, `gregory`, `home automation`]} />
    <div className="content">
      <h1>Larry Gregory</h1>

      <p>Dad @NewYork; JavaScript Engineer <a href="https://elastic.co">@elastic</a></p>

      <p>If you haven't guessed by now, this is my personal site.</p>
      <p>If I was clever, I'd have a better landing page.</p>
      <p>But I'm not.</p>
    </div>
  </Layout>
)

export default IndexPage
