import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import AnimatedCursor from "react-animated-cursor"
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

          <footer className="m-auto mt-16 py-8 text-center font-mono text-sm border-t border-zinc-400">
            © {new Date().getFullYear()} Sara Vikman
          </footer>
        </div>
      </div>
    </>
  )
}

export default PhotoLayout
