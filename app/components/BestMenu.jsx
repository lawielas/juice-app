import mango from '../assets/img/MANGO.png'
import kiwi from '../assets/img/KIWIIMAGE.png'
import raspberry from '../assets/img/raspberyy.png'
import Image from 'next/image'

const BestMenu = () => {
  return (
    <section className='mx-12 md:mx-44 mb-10'>
        <h2 className='text-heading text-3xl md:text-5xl my-7'>Explore best menu selections</h2>
        <div className='flex flex-col md:flex-wrap md:flex-row items-center md:justify-center gap-7 md:gap-24'>
            <div className='bg-gradient-to-t shadow-2xl from-[#FEBA44] to-[#FFE2C8] w-60 md:w-72 h-72 md:h-80 px-3 flex flex-col items-center justify-center rounded-3xl'>
                <Image src={mango} alt='mango' className='w-40 md:w-48' />
                <div className='-ml-10'>
                    <h3 className='font-jost text-xl lg:text-2xl font-medium'>Mango Bliss Burst</h3>
                    <p className='text-[#555555] text-xs'>Description of item</p>
                    <p className='font-inter text-lg my-8 font-semibold'><span className='text-red-600'>$</span>10.00</p>
                </div>   
            </div>
            <div className='bg-gradient-to-t shadow-2xl from-[#FEBA44] to-[#FFE2C8] w-60 md:w-72 h-72 md:h-80 px-3 flex flex-col items-center justify-center rounded-3xl'>
                <Image src={kiwi} alt='kiwi' className='w-40 md:w-44' />
                <div className='-ml-14'>
                    <h3 className='font-jost text-xl lg:text-2xl font-medium'>Pure Kiwi Joy</h3>
                    <p className='text-[#555555] text-xs'>Description of item</p>
                    <p className='font-inter text-lg my-8 font-semibold'><span className='text-red-600'>$</span>8.00</p>
                </div>
            </div>
            <div className='bg-gradient-to-t shadow-2xl from-[#FEBA44] to-[#FFE2C8] w-60 md:w-72 h-72 md:h-80 px-3 flex flex-col items-center justify-center rounded-3xl'>
                <Image src={raspberry} alt='raspberry' className='w-56 md:w-60 h-40 md:h-44' />
                <div className='-ml-10'>
                    <h3 className='font-jost text-xl lg:text-2xl font-medium'>Berry Burst Bliss</h3>
                    <p className='text-[#555555] text-xs'>Description of item</p>
                    <p className='font-inter text-lg my-8 font-semibold'><span className='text-red-600'>$</span>11.00</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default BestMenu