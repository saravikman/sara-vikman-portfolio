import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Cursor from "./cursor"

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
      <Header theme="black"></Header>
      <Cursor></Cursor>
      <div className="m-auto">
        <main>{children}</main>
        <footer className="m-auto mt-36 py-8 text-center font-mono text-sm border-t border-zinc-200">
          © {new Date().getFullYear()} Sara Vikman
        </footer>
      </div>
    </>
  )
}

export default Layout
