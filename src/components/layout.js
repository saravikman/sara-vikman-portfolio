import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import AnimatedCursor from "react-animated-cursor"

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
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2.5}
        color='11, 11, 11'
        outerAlpha={0.1}
        outerStyle={{
          border: '0px solid #333'
        }} />
      <div className="m-auto">
        <main>{children}</main>
        <footer className="m-auto mt-10 md:mt-36 py-8 text-center font-mono text-sm border-t border-zinc-200">
          © {new Date().getFullYear()} Sara Vikman
        </footer>
      </div>
    </>
  )
}

export default Layout
