import * as React from "react"
import ReactDOM from "react-dom";
import { useState } from "react";
import { motion, useInView, AnimatePresence, stagger } from "framer-motion"
import { Link, graphql } from 'gatsby';

const Menu = ({ open, className }) => (

    <motion.div
        key="nav-menu"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${className} bg-zinc-50/75 backdrop-blur-lg h-screen w-full fixed top-[0] right-0 z-40`}>
        <div className="menu flex flex-col text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -mt-4">
            <Link to='/#works-section'>
                <div className="overflow-hidden h-[120px]">
                    <motion.div
                        key="works-menu"
                        initial={{ translateY: 100, skewY: 7 }}
                        whileInView={{ translateY: 0, skewY: 0 }}
                        exit={{ translateY: -100, skewY: 7 }}
                        className="overflow-hidden h-[4.25rem] group">
                        <h1 className="font-heading font-light text-7xl translate-x-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">Works</h1>
                        <h1 className="font-heading text-7xl translate-x-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">Works</h1>
                    </motion.div>
                </div>
            </Link>
            <Link to='/about'>
                <div className="overflow-hidden h-[120px]">
                    <motion.div
                        key="about-menu"
                        initial={{ translateY: 100, skewY: 7 }}
                        whileInView={{ translateY: 0, skewY: 0 }}
                        exit={{ translateY: -100, skewY: 7 }}
                        className="overflow-hidden h-[4.25rem] group">
                        <h1 className="font-heading font-light text-7xl translate-x-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">About</h1>
                        <h1 className="font-heading text-7xl translate-x-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">About</h1>
                    </motion.div>
                </div>
            </Link>
        </div>
        <div className="absolute bottom-10 px-10 md:left-1/2 md:-translate-x-1/2 flex flex-wrap gap-6 justify-center">
            <a rel="noopener noreferrer" href="https://www.instagram.com/sarawik/" target='_blank' className="flex flex-wrap font-bold items-center gap-2 hover:underline hover:underline-offset-4 transition-all">
                Instagram{""}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
            <a rel="noopener noreferrer" href="https://www.behance.net/saravikman" target='_blank' className="flex flex-wrap font-bold items-center gap-2 hover:underline hover:underline-offset-4 transition-all">
                Behance{""}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
            <a rel="noopener noreferrer" href="https://www.flickr.com/photos/saravikman/" target='_blank' className="flex flex-wrap font-bold items-center gap-2 hover:underline hover:underline-offset-4 transition-all">
                Flickr{""}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
            <a rel="noopener noreferrer" href="http://www.linkedin.com/in/sara-vikman-4a991984" target='_blank' className="flex flex-wrap font-bold items-center gap-2 hover:underline hover:underline-offset-4 transition-all">
                LinkedIn{""}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
        </div>

    </motion.div>
)

export default Menu