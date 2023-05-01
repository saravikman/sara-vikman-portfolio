import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectInfo from "../components/project-info"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const content = {
    title: 'Agood Company',
    work: ['Graphic Design', 'Photography'],
    featuredImage: 'https://www.datocms-assets.com/99032/1682363960-agood_thumb2.jpg',
    description: 'A Good Company is a lifestyle brand with a truly sustainable profile. For A Good Company I had responsibility for producing creatives for marketing activities, both digital and print, developing packaging design, product design and design for retail, as well as product photography and digital imagery for the website.',
  };

const AgoodCompany = () => {

return (
  <Layout>

      <div className="grid grid-cols-12 pt-44 pb-44 px-6 bg-[#f4f4f4] items-center">
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
            <ProjectInfo title={content.title} keywords={content.work} description={content.description}></ProjectInfo>
        </div>
      </div>

      <div className="flex flex-wrap px-36 -mt-28">
        <img className="rounded-md w-full mb-[--image-margin]" src={content.featuredImage}></img>
        <div className="grid grid-cols-2 gap-[--image-margin] mb-[--image-margin]">
          <img className="rounded-md" src={content.featuredImage}></img>
          <img className="rounded-md" src="https://www.datocms-assets.com/99032/1682803734-12.jpg"></img>
        </div>
        <div className="w-[70%] m-auto text-center py-24">
          <p className="text-2xl leading-relaxed">
            A Good Company is a lifestyle brand with a truly sustainable profile. For A Good Company I had responsibility for producing creatives for marketing activities, both digital and print, developing packaging design.</p>
        </div>
        <div className="grid grid-cols-3 gap-[--image-margin] mb-[--image-margin]">
          <img className="rounded-md" src={content.featuredImage}></img>
          <img className="rounded-md" src="https://www.datocms-assets.com/99032/1682803734-12.jpg"></img>
          <img className="rounded-md" src={content.featuredImage}></img>
        </div>
      </div>

  </Layout>
)
}

export const Head = () => <Seo title="Home" />

export default AgoodCompany
