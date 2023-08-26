import * as React from "react"
import { Link } from "gatsby"
import { useState } from 'react';
import Menu from "./menu"

const Header = ({ siteTitle, theme }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className={`py-6 px-6 md:px-10 m-auto flex justify-between items-center fixed z-50 w-full backdrop-blur-lg bg-zinc-50/0 border-b border-zinc-100/50`}>
        <Link to="/" className="bg-white bg-opacity-0">
          <svg width="17" height="33" viewBox="0 0 219 471" fill={`${openMenu ? `black` : `${theme}`}`} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_114_58)">
              <path d="M167.39 469.86C167.204 470.021 166.969 470.112 166.723 470.119C166.477 470.125 166.237 470.046 166.043 469.895C165.85 469.744 165.714 469.53 165.661 469.29C165.607 469.05 165.639 468.799 165.75 468.58C198.75 398.3 192.46 361.07 139.59 307.19C117 284.22 91.6501 264.06 68.0001 242.1C32.5701 209.13 2.00006 173.4 0.100058 121.24C-2.44994 51.61 42.6701 1.29997 112.73 -2.57567e-05C141.8 -0.480026 171 3.99997 202.33 6.88997C203.138 6.96705 203.922 7.20716 204.634 7.5958C205.346 7.98443 205.972 8.51351 206.474 9.15104C206.976 9.78856 207.344 10.5213 207.554 11.3049C207.765 12.0885 207.815 12.9067 207.7 13.71L199.7 68.95C199.632 69.2536 199.464 69.5256 199.222 69.7222C198.981 69.9189 198.681 70.0289 198.37 70.0347C198.059 70.0404 197.754 69.9416 197.506 69.754C197.258 69.5664 197.08 69.3009 197 69C186.1 18.87 118.52 5.15997 74.1101 28.66C36.1101 48.75 23.4801 105.53 52.3701 143.07C71.3201 167.69 96.6301 187.4 119.12 209.29C141.61 231.18 166.8 251 186.24 275.4C235.42 337 227.35 420.64 167.39 469.86Z" fill={`${openMenu ? `black` : `${theme}`}`} />
            </g>
            <defs>
              <clipPath id="clip0_114_58">
                <rect width="218.36" height="470.11" fill={`${openMenu ? `black` : `${theme}`}`} />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <div className="h-auto">
          <button onClick={toggleMenu}
            className="hamburger group w-9 h-7 relative z-50">
            <span className={`${openMenu ? `rotate-[135deg] translate-y-[10px] bg-black` : `group-hover:w-4 bg-${theme}`} hamburger-line block h-0.5 w-full rounded-full absolute top-0 transition-all duration-300 ease-in-out`}></span>
            <span className={`bg-${theme} ${openMenu ? "w-0" : "w-full"} block h-0.5 rounded-full absolute top-[0.65rem]`}></span>
            <span className={`${openMenu ? `-rotate-[135deg] -translate-y-[11px] bg-black` : `group-hover:w-4 bg-${theme}`} hamburger-line block h-0.5 w-full rounded-full absolute top-[1.3rem] transition-all delay-200 duration-300 ease-in-out`}></span>
          </button>
        </div>

      </header>

      {openMenu ? (
        <Menu className="opacity-100"></Menu>
      ) : null}

    </>
  )
}

export default Header






