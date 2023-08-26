import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Cursor from "./cursor"

const Layout = ({ children }) => {

  return (
    <>
      <Header theme="black"></Header>
      <Cursor></Cursor>
      <div className="m-auto">
        <main>{children}</main>
        <footer className="m-auto mt-10 md:mt-16 py-8 text-center font-mono text-xs uppercase font-medium tracking-wider">
          © {new Date().getFullYear()} Sara Vikman
        </footer>
      </div>
    </>
  )
}

export default Layout
