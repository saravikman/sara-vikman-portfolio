import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Cursor from "./cursor"
import ProjectLinks from "./project-links"

const ProjectLayout = ({ children }) => {
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

        <footer className="m-auto mt-16 py-8 text-center font-mono text-sm border-t border-zinc-400">
          © {new Date().getFullYear()} Sara Vikman
        </footer>
      </div>
    </>
  )
}

export default ProjectLayout
