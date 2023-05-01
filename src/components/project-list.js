import * as React from "react"
import { Link } from "gatsby"

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
    },
    {
      id: 'Maria Casino',
      work: ['Digital Design', 'Web Development'],
      image: 'https://www.datocms-assets.com/99032/1682948951-maria_thumb.png',
    },
    {
      id: 'Österlånggatan 17',
      work: ['Logotype'],
      image: 'https://www.datocms-assets.com/99032/1682948955-osterlang_thumb.gif',
    },
    {
      id: 'Editorial',
      work: ['Collection'],
      image: 'https://www.datocms-assets.com/99032/1682948930-editorial_thumb.png',
    },
    {
      id: 'Illustration',
      work: ['Collection'],
      image: 'https://www.datocms-assets.com/99032/1682948948-illustration_thumb.png',
    },
  ];
  
const allProjects = projects.map((item) => ([item.id]))

const ProjectList = ( { current } ) => {

    return (
    
    <div className="m-auto text-center w-[90%] mt-6">
    <h4 className="mb-6">Other Projects</h4>

        {allProjects.filter(name => name != current).map(projectName => (
            <p className="inline text-2xl m-6 leading-loose">{projectName}</p>

        ))}
    </div>
    
    );
}

export default ProjectList