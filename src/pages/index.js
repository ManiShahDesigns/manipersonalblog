import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import "../styles/index.css"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "My name is Mani 😊"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            "wordpress",
            "php",
            "web development",
          ]}
        />
        <p>I'm a web developer who tries to learn something new every day.</p>
        <p>
          I'm going to share things that I think could be useful to web
          developers out there on this blog.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
