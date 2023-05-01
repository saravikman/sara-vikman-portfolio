import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as indexStyles from "../components/index.module.css"
import ProjectHeading from "../components/project-heading"
import Blob from "../components/blob"
import ProjectImage from "../components/project-image"
import WorksCard from "../components/works-card"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const projects = [
  {
    id: 'Agood Company',
    work: ['Graphic Design', 'Photography'],
    image: 'https://www.datocms-assets.com/99032/1682363960-agood_thumb2.jpg',
    link: '/agood-company'
  },
  {
    id: 'Unibet',
    test: 'Digital Design',
    work: ['Digital Design', 'Web Development'],
    image: 'https://saravikman.se/design/img/unibet/hockey-thumb.jpg',
  },
  {
    id: 'Maria Casino',
    work: ['Digital Design', 'Web Development'],
    image: 'https://saravikman.se/design/img/maria-casino/mc-thumb.jpg',
  },
  {
    id: 'Österlånggatan 17',
    work: ['Logotype'],
    image: 'https://saravikman.se/design/img/osterlanggatan/o17-thumb.jpg',
  },
  {
    id: 'Japanporten',
    work: ['Web Design', 'Web Development'],
    image: 'https://cdna.artstation.com/p/assets/images/images/057/937/380/large/sara-vikman-gilt-2.jpg?1673010366',
  },
];

const IndexPage = () => (
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

      <div className="grid grid-cols-12 pt-44 pb-24 px-6 overflow-hidden bg-[#f4f4f4] items-center relative md:min-h-[90vh]">
        <div className="bg-[#f4f4f4] bg-repeat absolute h-full w-full" style={{
              /*backgroundImage: 'url(https://arc.net/noise.png)',*/
        }}></div>
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
          <h1 className="text-5xl md:text-7xl">
            Digital designer, web developer and hobby photographer.
          </h1>
        </div>

      <Blob></Blob>
      </div>

      <div id="design" className="scroll-mt-20 grid grid-cols-2 gap-10 z-10 px-36 m-auto mb-10 pt-16">
        { projects.map(( item, index ) => {
            return (
              <>
              <WorksCard key={item.id} number={index+1} name={item.id} work={item.work} image={item.image} link={item.link}>
              </WorksCard>
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
