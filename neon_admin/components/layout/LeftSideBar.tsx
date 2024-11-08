import React from 'react'
import { navLinks } from '../../lib/constants'
import { link } from 'fs/promises'
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-x1 max-lg:hidden'>
      <img src='/logo.png' alt='logo' width={150} height={70}/>
      <div className='flex flex-col gap-12'>
        {navLinks.map((link) => (
        <Link 
          href={link.url}
          >

          </Link>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar
