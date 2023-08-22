import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Cursor from "./cursor"
import ProjectLinks from "./project-links"
import { useInView } from "framer-motion"
import { useState, useEffect } from 'react';


const PhotoLayout = ({ children, theme, projects }) => {

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 700)
    })
  }, [])

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
      <div className="relative">
        <Header theme={`${scroll ? "black" : "white"}`}></Header>
        <Cursor></Cursor>
        <div className="m-auto">
          <main>{children}</main>

          <footer className="m-auto mt-16 py-8 text-center font-mono text-sm border-t border-zinc-400">
            © {new Date().getFullYear()} Sara Vikman
          </footer>
        </div>
      </div>
    </>
  )
}

export default PhotoLayout
