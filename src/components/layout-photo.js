import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Cursor from "./cursor"
import { useState, useEffect } from 'react';

const PhotoLayout = ({ children, theme, projects }) => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 700)
    })
  }, [])

  return (
    <>
      <div className="relative">
        <Header theme={`${scroll ? "black" : "white"}`}></Header>
        <Cursor></Cursor>
        <div className="m-auto">
          <main>{children}</main>
          <footer className="m-auto mt-10 md:mt-16 py-8 text-center font-heading text-xs uppercase font-medium tracking-wider">
            © {new Date().getFullYear()} Sara Vikman
          </footer>
        </div>
      </div>
    </>
  )
}

export default PhotoLayout
