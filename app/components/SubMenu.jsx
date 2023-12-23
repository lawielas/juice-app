import pineapple from '../assets/img/Pineapple.png'
import grapes from '../assets/img/grapes.png'
import watermelon from '../assets/img/Watermelon.png'
import Image from 'next/image'

const SubMenu = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-16 my-10 md:my-16'>
        <div className="font-jost w-3/4 md:w-1/4">
            <h2 className="text-3xl md:text-5xl">Why we are better than others</h2>
            <p className="text-xl md:text-2xl">Our commitment to excellence in the realm of juices sets us apart from the competition.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
            <div className='bg-gradient-to-t from-[#FEBA44] to-[#FFE2C8] w-36 md:w-44 h-52 md:h-60 flex justify-center items-center rounded-3xl shadow-2xl'>
                <Image src={pineapple} alt='pineapple' className='w-28 md:w-40' />
            </div>
            <div className='bg-gradient-to-t from-[#FEBA44] to-[#FFE2C8] w-36 md:w-44 h-52 md:h-60 flex justify-center items-center rounded-3xl md:-mb-10 md:mt-10 relative shadow-2xl'>
                <Image src={grapes} alt='grapes' className='w-12 md:w-14' />
            </div>
            <div className='bg-gradient-to-t from-[#FEBA44] to-[#FFE2C8] w-36 md:w-44 h-52 md:h-60 flex justify-center items-center rounded-3xl shadow-2xl'>
                <Image src={watermelon} alt='watermelon' className='w-32 md:w-48' />
            </div>
        </div>
        
    </section>
  )
}
export default SubMenu