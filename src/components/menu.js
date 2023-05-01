import * as React from "react"

const Menu = ( { open, className } ) => (
    
    <div className={`${className} menu flex flex-col p-[4rem] bg-zinc-50/75 backdrop-blur-lg place-content-center h-screen w-full text-center fixed top-[0] right-0 z-40 border border-zinc-40`}>
        <a className="text-6xl pt-[4rem] mb-16" href="/">Design</a>
        <a className="text-6xl mb-16" href="/">Photography</a>
        <a className="text-6xl mb-16" href="./about">About</a>
    </div>
    )

export default Menu