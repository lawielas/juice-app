import Image from 'next/image'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import twitter from '../assets/svg/twitter.svg'
import youtube from '../assets/svg/youtube.svg'

const Footer = () => {
  return (
    <section className="flex items-center gap-3 md:gap-10 pb-10 mx-9 md:mx-44">
        <div className="flex gap-2 md:gap-7">
            <Image src={facebook} alt='facebook' className='w-8 md:w-12' />
            <Image src={instagram} alt='instagram' className='w-7 md:w-10' />
            <Image src={twitter} alt='twitter' className='w-7 md:w-10' />
            <Image src={youtube} alt='youtube' className='w-7 md:w-10' />
        </div>
        <p className="font-inter text-[9px] sm:text-xs md:text-sm text-[#555555]">Copyright &copy; 2023 Dscode | All rights reserved</p>
    </section>
  )
}
export default Footer