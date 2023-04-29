import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Header></Header>

    <div className="m-auto">
      <main>{children}</main>
      <footer className="m-auto py-8 text-center font-mono text-sm border-t border-zinc-400">
          © {new Date().getFullYear()} Sara Vikman
      </footer>
    </div>
    </>
  )
}

export default Layout
