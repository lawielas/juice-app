import Image from 'next/image'
import orangeImage from '../assets/img/OrangeIMAGE.png'

const MainMenu = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center my-3 md:my-7'>
        <div className=' w-3/4 my-7 md:my-0 md:w-2/4'>
            <h1 className='text-heading font-jost text-5xl md:text-7xl'>
                Revitalize Your Routine, Fresh, Fruity, Fantastic!
            </h1>
            <p className=' font-jost text-xl md:text-2xl my-6'>Savor the Symphony of Flavors, with Nature&apos;s Sweetness & deliciousness.Get the best variety of juices here!</p>
            <div className='font-quickSand flex gap-3 md:gap-6 text-base md:text-lg font-medium'>
                <button className='bg-heading text-white py-2 w-28 md:w-32 rounded-lg border-2 border-heading'>View Menu</button>
                <button className='text-heading py-2 w-28 md:w-32 rounded-lg border-2 border-heading'>Discount</button>
            </div>
        </div>
        <Image src={orangeImage} alt='orange image' className='w-72 md:w-96'/>
    </section>
  )
}
export default MainMenu