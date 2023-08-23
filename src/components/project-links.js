import * as React from "react"

const ProjectLinks = ( {theme, projects} ) => {
    
    const projectsList = projects.map((item) => item.question);
    
    return (
    <div>
        <a className={`text-${theme} text-xs uppercase fixed top-[52vh] left-0 -rotate-90 opacity-50`} href="/">Next Project</a>
        <a className="text-xs uppercase fixed top-[50vh] right-0 -rotate-90 opacity-50" href="/">Previous Project</a>
    </div>
    )
    }
export default ProjectLinks