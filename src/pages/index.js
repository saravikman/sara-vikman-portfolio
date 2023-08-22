import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blob from "../components/blob"
import WorksCard from "../components/works-card"
import JumboHeading from "../components/jumbo-heading"

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
}
`
const projects = [
  {
    id: 'Agood Company',
    work: ['Graphic Design', 'Photography'],
    image: 'https://www.datocms-assets.com/99032/1682948922-agood_thumb.png',
    link: '/agood-company'
  },
  {
    id: 'Unibet',
    test: 'Digital Design',
    work: ['Digital Design', 'Web Development'],
    image: 'https://www.datocms-assets.com/99032/1682948927-unibet_thumb.png',
    link: '/agood-company'
  },
];

const lightColor = '#f4f4f4'

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const IndexPage = ({ data }) => (
  <Layout>
    <div className="w-full">
      {/*
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />*/}

      <div className="grid grid-cols-12 pt-44 pb-24 px-6 overflow-hidden bg-[#f4f4f4] items-center relative md:min-h-[100vh]">
        <div className="bg-repeat absolute h-full w-full" style={{
          backgroundImage: 'url(https://arc.net/noise.png)',
          zIndex: 1,
          backgroundBlendMode: 'overlay',
          opacity: '30%',
        }}></div>
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
          <JumboHeading>Digital designer, web developer and hobby photographer.</JumboHeading>
        </div>

        <Blob></Blob>
      </div>

      <div id="design" className="scroll-mt-20 md:grid md:grid-cols-2 md:gap-10 z-10 px-36 m-auto mb-10 pt-16">
        {data.allContentfulPhotography.nodes.map((item, index) => {
          return (
            <>
              <button onClick={scrollToTop} >
                <WorksCard key={item.id} number={index + 1} name={item.title} work={item.work} image={item.hero.url} link={`../photography/${item.slug}`}>
                </WorksCard>
              </button>
            </>
          );
        })}
      </div>
      {/*
      <div className=" z-10 relative">
        <div className="grid md:grid-cols-2">
        { projects.map(({name, work, image}) => {
            return (
              <ProjectCard name={name} work={work} image={image}></ProjectCard>
            );
          })}
        </div>
        </div>*/}

    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
