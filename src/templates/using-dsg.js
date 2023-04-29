import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <div className="pt-44 pb-24 px-6 items-center relative">
      <h1>
        Unibet
      </h1>
      <p>This page is not created until requested by a user.</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
          documentation about Deferred Static Generation
        </a>
        .
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
