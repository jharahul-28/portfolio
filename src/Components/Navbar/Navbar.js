import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between px-4 py-2 align-middle w-screen'>
        <span className='font-kolker-brush text-3xl'>
            <p>RJ</p>
        </span>
        <ul className='flex flex-row gap-8 border-solid border-white border rounded-2xl px-4 py-1'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/'>Achievements</Link>
            </li>
            <li>
                <Link href='/'>Projects</Link>
            </li>
            <li>
                <Link href='/'>Skills</Link>
            </li>
            <li>
                <Link href='/'>Resume</Link>
            </li>
        </ul>
        <span className='bg-white rounded-2xl px-4 py-1'>
            <p className='text-black'>Contact Me</p>
        </span>
    </div>
  )
}

export default Navbar