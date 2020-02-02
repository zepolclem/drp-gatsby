import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Drperformance" />
    <h1>Bienvenue chez DRPerformance</h1>
    <p>Site internet en cours de développement.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Container>
      <iframe
        src='https://mychiptuningfiles.com/fr/iframe/token/bf67jwimxhc7ljyv5vepnwuoxd422v3mdfophhbf'
        style={{
          border: '1px solid #aaa', width: '100%', minHeight: '1000px'
        }}></iframe>
    </Container>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
