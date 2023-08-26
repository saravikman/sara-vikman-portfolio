import * as React from "react"
import { useRef, useState, useEffect } from "react";
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blob from "../components/blob"
import WorksCard from "../components/works-card"
import JumboHeading from "../components/jumbo-heading"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FadingWords } from "../components/fadingWords";

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export const query = graphql`
query Index {
  allContentfulPhotography {
    nodes {
        slug
        title
        work
        id
        hero {
          url
        }
    }
  }
  allContentfulDesign(sort: {order: ASC}) {
    nodes {
        slug
        title
        keywords
        id
        linkThumbImage {
          url
        }
    }
  }
}
`
const IndexPage = ({ data }) => {

  // Toggle Work and Photography content
  const [active, setActive] = useState('work');
  const onSetActiveMenuItem = (item) => {
    if (item !== active) {
      setActive(item);
    }
    else {
      setActive(''); // handle click on currently active item
    }
  };
  // Toggle end

  // Scroll to works if click on Keep scrolling
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  // end

  return (
    <>
      <div>
        <Layout>
          <div className="w-full">
            <div className="flex m-auto overflow-hidden bg-gray-50 items-center relative h-[500px] md:h-[800px] lg:h-[100vh]">
              <div className="bg-repeat absolute h-full w-full" style={{
                backgroundImage: 'url(https://arc.net/noise.png)',
                zIndex: 1,
                backgroundBlendMode: 'overlay',
                opacity: '90%',
              }}></div>
              <div className="w-10/12 lg:w-4/5 z-10 m-auto lg:pr-64">
                <JumboHeading>Digital designer, web developer and hobby photographer.</JumboHeading>
              </div>
              <div className="z-30 absolute bottom-10 left-1/2 -translate-x-1/2 font-sans text-sm font-medium text-center flex flex-col items-center gap-4">
                <button onClick={handleClick}>Keep scrolling</button>
                <button onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                  </svg></button>
              </div>

              <img className="opacity-70 absolute top-0 max-w-none w-[900px] md:w-[1200px] z-0 animate-spin-slow" src="https://images.ctfassets.net/k1w1j9na9uy7/4ZWOXB9mhY3VE7LopoHiGV/429c0dd5274e3bb31126bdf3fa48a933/Group_29.png?h=250"></img>
            </div>

            <div ref={ref} id="works-section" className="w-4/5 md:w-10/12 m-auto pt-10 md:py-10">
              <button onClick={active === 'photography' ? () => onSetActiveMenuItem('work') : undefined} className={active === 'work' ? "font-bold" : "text-neutral-500 hover:text-neutral-400 hover:underline hover:underline-offset-4"}>Work</button>
              <span className="px-2">/</span>
              <button onClick={active === 'work' ? () => onSetActiveMenuItem('photography') : undefined}
                className={active === 'photography' ? "font-bold" : "text-neutral-500 hover:text-neutral-400 hover:underline hover:underline-offset-4"}>Photography</button>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-x-24 w-4/5 md:w-10/12 z-10 m-auto mb-10">
              {active === 'photography' ?
                <>
                  {data.allContentfulPhotography.nodes.map((item, index) => {
                    return (
                      <>
                        <AnimatePresence>
                          <div className="flex w-full">
                            <div className="my-5 md:my-10">

                              <WorksCard keyID={item.id} number={index + 1} name={item.title} work={item.work} image={item.hero.url} link={`../photography/${item.slug}`}>
                              </WorksCard>

                            </div>
                          </div>
                        </AnimatePresence>
                      </>
                    );
                  })}
                </>
                : null}

              {active === 'work' ?
                <>
                  {data.allContentfulDesign.nodes.map((item, index) => {
                    return (
                      <>
                        <div className="flex w-full">
                          <div className="my-5 md:my-10">

                            <WorksCard keyID={item.id} number={index + 1} name={item.title} work={item.keywords} image={item.linkThumbImage.url} link={`../work/${item.slug}`}>
                            </WorksCard>

                          </div>
                        </div >
                      </>
                    );
                  })}
                </> : null}
            </div>

            {/*
            <div className="md:grid md:grid-cols-1 md:gap-x-24 w-4/5 md:w-10/12 z-10 m-auto mb-10 ">
              {active === 'photography' ?
                <>
                  {data.allContentfulPhotography.nodes.map((item, index) => {
                    return (
                      <>
                        <div className="flex w-full odd:justify-start even:justify-end">
                          <div className="w-1/2 my-10">
                            <button onClick={scrollToTop} >
                              <WorksCard key={item.id} number={index + 1} name={item.title} work={item.work} image={item.hero.url} link={`../photography/${item.slug}`}>
                              </WorksCard>
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
                : null}

              {active === 'work' ?
                <>
                  {data.allContentfulDesign.nodes.map((item, index) => {
                    return (
                      <>
                        <div className="flex w-full odd:justify-start even:justify-end">
                          <div className="w-[55%] my-10">
                            <button onClick={scrollToTop} >
                              <WorksCard key={item.id} number={index + 1} name={item.title} work={item.keywords} image={item.linkThumbImage.url} link={`../work/${item.slug}`}>
                              </WorksCard>
                            </button>
                          </div>
                        </div >
                      </>
                    );
                  })}
                </> : null}
                </div>*/}

          </div>

        </Layout >
      </div >
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
