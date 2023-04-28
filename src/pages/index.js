import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as indexStyles from "../components/index.module.css"
import ProjectCard from "../components/project-card"
import * as styles from "../css/style.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const projects = [
  {
    name: 'Unibet',
    work: 'Digital Design',
    image: 'https://saravikman.se/design/img/unibet/hockey-thumb.jpg',
  },
  {
    name: 'Agood Company',
    work: 'Graphic Design',
    image: 'https://saravikman.se/design/img/agood/agood_thumb2.jpg',
  },
  {
    name: 'Maria Casino',
    work: 'Graphic Design',
    image: 'https://saravikman.se/design/img/maria-casino/mc-thumb.jpg',
  },
];

const IndexPage = () => (
  <Layout>
    <div 
    style={{
      width:`100wv`,
    }}>
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

      <div style={{ /* Fixed header spacing */
            margin: `0 auto`,
            padding: `var(--space-4) var(--size-gutter)`,
          }}
        >
      </div>

      <div className={styles.noise} style={{
            padding: `0`,
            background: `#f4f4f4`,
            minHeight: `40rem`,
            alignItems: `center`,
            display:`grid`,
            gridTemplateColumns: `repeat(12,minmax(0,1fr))`,
            overflow:'hidden',
          }}
          >
        <div style={{
              background: '#e5e5e5',
              backgroundImage: 'url(https://arc.net/noise.png)',
              backgroundRepeat: 'repeat',
              minHeight:'100vh',
              minWidth:'100vw',
        }}></div>
        <div style={{gridColumn: `3 / span 6`, fontSize: 'var(--font-lg)', zIndex:'10'}}>
          <h1>
            Lorem ipsum dolor sit amet. Dolisequetur lorem.
          </h1>
        </div>

        <span style={{
            width:'30rem',
            height:'30rem',
            background:'#f0f0f0',
            borderRadius: '100%',
            filter: 'blur(200px)',
            position:'absolute',
            top:'-15rem',
            right: '0',
            zIndex: '0',
          }}></span>

          <span style={{
            width:'30rem',
            height:'30rem',
            background:'#DBAAC4',
            borderRadius: '100%',
            filter: 'blur(200px)',
            position:'absolute',
            left:'-9rem',
            bottom: '0',
            zIndex: '0',
          }}></span>

      </div>

      <div style={{
         zIndex:'10',     
         position:'relative',  
      }}>
      <div style={{
        display:`grid`,
        gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
      }}>

        {
          projects.map(({name, work, image}) => {
            return (
              <ProjectCard name={name} work={work} image={image}></ProjectCard>
            );
          })

        }
{/*
        <ProjectCard name="Unibet" work="UX Design" image="https://saravikman.se/design/img/agood/agood_thumb2.jpg"></ProjectCard>
        <ProjectCard name="Agood Company" work="Photography" image="https://saravikman.se/design/img/unibet/hockey-thumb.jpg"></ProjectCard>
*/}
        </div>
        </div>

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
