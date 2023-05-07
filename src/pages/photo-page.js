import * as React from "react"
import ProjectLayout from "../components/project-layout"
import Seo from "../components/seo"
import ProjectInfo from "../components/project-info"
import { useRef } from "react";
import { motion, useInView } from "framer-motion"

const content = {
    title: 'Illustration',
    work: ['Collection'],
    featuredImage: 'https://cdnb.artstation.com/p/assets/images/images/053/730/717/large/sara-vikman-backahasten-web.jpg?1662910788',
    description: 'A Good Company is a lifestyle brand with a truly sustainable profile. For A Good Company I had responsibility for producing creatives for marketing activities, both digital and print, developing packaging design, product design and design for retail, as well as product photography and digital imagery for the website.',
  };

const scotland = [
    'https://saravikman.se/photo/img/scotland/calton-hill.jpg',
    'https://saravikman.se/photo/img/scotland/crags.jpg', 
    'https://saravikman.se/photo/img/scotland/edi-castle.jpg',
    'https://saravikman.se/photo/img/scotland/edi-castle-summer.jpg',
    'https://saravikman.se/photo/img/scotland/highlands.jpg',
    'https://saravikman.se/photo/img/scotland/raasay.jpg',
    'https://saravikman.se/photo/img/scotland/kilt-rock-2.jpg',
    'https://saravikman.se/photo/img/scotland/kilt-rock.jpg',
    'https://saravikman.se/photo/img/scotland/three-sisters.jpg',
]

const equine = [
    'https://saravikman.se/photo/img/equine/sunspot.jpg',
    'https://saravikman.se/photo/img/equine/cardus_neck_c.jpg', 
    'https://saravikman.se/photo/img/equine/cardus_coat_bw_c.jpg',
    'https://saravikman.se/photo/img/equine/atlet.jpg',
    'https://saravikman.se/photo/img/equine/alonso.jpg',
    'https://saravikman.se/photo/img/equine/nordsvensk.jpg',
    'https://saravikman.se/photo/img/equine/grazing.jpg',
    'https://saravikman.se/photo/img/equine/yeguada_colt.jpg',
    'https://saravikman.se/photo/img/equine/eventing.jpg',
]

const Photo = () => {
const ref = useRef(null)
return (
  <ProjectLayout>

    <div id="scrollableElement" className="grid grid-cols-12 pt-44 pb-16 px-6 bg-gradient-to-t from-[#f4f4f4] to-[white] items-center">
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
            <ProjectInfo title={content.title} keywords={content.work} description={content.description}></ProjectInfo>
        </div>
      </div>

    <div className="pt-2">
    <div className="scrolling-wrapper flex flex-nowrap overflow-x-auto">
        { equine.map(( item ) => {
            return (
                <div className="m-0 flex-[0_0_auto]">
                <motion.img className="max-h-[37rem]" 
                ref={ref}
                initial={{ opacity: 0, filter: "blur(30px)" }}
                whileInView={{ opacity: 1, filter: "blur(0)", }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ amount: 0.1 }}
                src={item}>
                </motion.img>
                </div>
            );
          })}
    </div>
    </div>
  </ProjectLayout>
)
}

export const Head = () => <Seo title="Illustration" />

export default Photo
