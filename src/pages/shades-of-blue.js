import * as React from "react"
import PhotoLayout from "../components/photo-layout"
import Seo from "../components/seo"
import ProjectInfo from "../components/project-info"
import JumboHeading from "../components/jumbo-heading"
import { useRef } from "react";
import { motion, useInView } from "framer-motion"

const content = {
    title: 'Shades of Blue',
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
  <PhotoLayout>
    
    <motion.div className="min-h-[100vh] bg-[url('https://saravikman.se/photo/img/korea/gwanghwamun.jpg')] bg-cover bg-top bg-fixed flex place-items-end">
        <div className="w-[50%] ml-20 mb-16">
            <motion.div 
                    ref={ref} 
                    initial={{ opacity: 0, translateY: 30, }}
                    whileInView={{ opacity: 1, translateY: 0, }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                    <span className="font-mono text-md text-white">02</span>
                    <h2 className="text-white text-8xl mb-4 group-hover:underline">{content.title}</h2>
            </motion.div>
        </div>
    </motion.div>

    <div className="pt-2">
    <div className="scrolling-wrapper flex flex-nowrap overflow-x-auto">
    </div>
    </div>
  </PhotoLayout>
)
}

export const Head = () => <Seo title="Illustration" />

export default Photo
