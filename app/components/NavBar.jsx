import Image from 'next/image'
import logo from '../assets/img/LOGO.png'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='flex justify-between md:justify-around items-center'>
        <Image src={logo} alt='Logo' className='px-3 md:px-0 w-28 md:w-32'/>
        <section className={showMenu ? 'absolute w-screen text-center shadow-2xl bg-orange-200 bg-opacity-90 z-20 top-0 py-2 font-quickSand flex flex-col gap-3 lg:gap-11 font-semibold text-xl lg:text-2xl': 'hidden md:font-quickSand md:flex gap-6 lg:gap-11 font-semibold text-xl lg:text-2xl'}>
            <Link href='/' >Home</Link>
            <Link href='/' >Features</Link>
            <Link href='/' >Menu</Link>
            <Link href='/' >Pricing</Link>
            <Link href='/' >Contact</Link>
            <button className='font-quickSand font-semibold text-xl border-2 border-black py-2 md:hidden'>
              Sign up
            </button>
        </section>
        <div onClick={handleMenu} className='hidden md:block'>
          <button className='font-quickSand font-semibold text-xl lg:text-2xl border-2 border-black py-2 px-3 md:px-5 lg:px-7 rounded-xl'>
            Sign up
          </button>
        </div>
        <div onClick={handleMenu} className='z-30 px-3 md:px-0 relative md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
    </nav>
  )
}
export default NavBar