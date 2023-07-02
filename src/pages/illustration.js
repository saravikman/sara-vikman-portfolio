import * as React from "react"
import ProjectLayout from "../components/project-layout"
import Seo from "../components/seo"
import ProjectInfo from "../components/project-info"
import ProjectList from "../components/project-list"

const content = {
    title: 'Illustration',
    work: ['Collection'],
    featuredImage: 'https://cdnb.artstation.com/p/assets/images/images/053/730/717/large/sara-vikman-backahasten-web.jpg?1662910788',
    description: 'A Good Company is a lifestyle brand with a truly sustainable profile. For A Good Company I had responsibility for producing creatives for marketing activities, both digital and print, developing packaging design, product design and design for retail, as well as product photography and digital imagery for the website.',
  };

const Illustration = () => {

return (
  <ProjectLayout>

      <div className="grid grid-cols-12 pt-44 pb-44 px-6 bg-gradient-to-t from-[#f4f4f4] to-[white] items-center">
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
            <ProjectInfo title={content.title} keywords={content.work} description={content.description}></ProjectInfo>
        </div>
      </div>

      <div className="flex flex-wrap px-36 -mt-36">
        <img className="rounded-md w-full my-[--image-margin]" src={content.featuredImage} alt=""></img>
        <div className="grid grid-cols-2 gap-[--image-gap] my-[--image-margin] items-center">
          <img className="rounded-md object-contain" alt="" src="https://cdna.artstation.com/p/assets/images/images/030/364/752/large/sara-vikman-mycenean-22.jpg?1600369227"></img>
          <img className="rounded-md object-contain" alt="" src="https://cdnb.artstation.com/p/assets/images/images/056/857/913/large/sara-vikman-roman-web.jpg?1670264808"></img>
        </div>
        <div className="w-[70%] m-auto text-center py-24">
          <p className="text-2xl leading-relaxed">
            A Good Company is a lifestyle brand with a truly sustainable profile. For A Good Company I had responsibility for producing creatives for marketing activities, both digital and print, developing packaging design.</p>
        </div>
        <div className="grid grid-cols-3 gap-[--image-gap] my-[--image-margin]">
          <img className="rounded-md" alt="" src="https://cdna.artstation.com/p/assets/images/images/057/937/380/large/sara-vikman-gilt-2.jpg?1673010366"></img>
          <img className="rounded-md" alt="" src="https://cdnb.artstation.com/p/assets/images/images/043/588/011/large/sara-vikman-lira-web.jpg?1637695763"></img>
          <img className="rounded-md" alt="" src="https://cdna.artstation.com/p/assets/images/images/037/282/548/large/sara-vikman-karliah-1.jpg?1619986265"></img>
        </div>
      </div>
  <ProjectList current={content.title}></ProjectList>
  </ProjectLayout>
)
}

export const Head = () => <Seo title="Illustration" />

export default Illustration
