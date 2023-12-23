import Image from 'next/image'
import logo from '../assets/img/LOGO.png'
import phone from '../assets/svg/phone.svg'
import mail from '../assets/svg/mail.svg'

const Contact = () => {
  return (
    <section className='flex flex-col md:flex-row items-center md:items-start md:justify-center gap-6 md:gap-x-24 my-10'>
        <div className='flex flex-col items-center md:items-start font-jost'>
            <div className='text-heading'>
                <h2 className='text-3xl md:text-5xl font-semibold'>Contact Us</h2>
                <p className='text-lg md:text-2xl'>Send us a message</p>
            </div>
            <form className='flex flex-col font-inter my-5'>
                <input type="text" placeholder="Full name" className='rounded-2xl p-2' />
                <input type="email" placeholder="Your email" className='rounded-2xl p-2 my-2' />
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Your Message..." className='rounded-2xl p-2'></textarea>
                <button className='bg-[#FFA500] px-3 py-2 w-32 my-2 rounded-xl self-center text-white font-semibold'>Submit</button>
            </form>
        </div>
        <div>
            <div className='flex flex-col font-jost mb-4 text-heading'>
                <h2 className='text-3xl md:text-5xl font-semibold '>Sitemap</h2>
                <p className='text-lg md:text-2xl'>All our pages</p>
            </div>
            <ul className='list-disc font-poppins text-lg'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={logo} alt='logo' className='w-28' />
            <div className='flex items-center gap-3'>
                <Image src={phone} alt='phone' className='w-4' />
                <p className=' font-poppins text-lg'>(08) 400 2000</p>
            </div>
            <div className='flex items-center gap-3'>
                <Image src={mail} alt='email' className='w-5' />
                <p className=' font-poppins text-lg'>xyz@gmail.com</p>
            </div>
        </div>
    </section>
  )
}
export default Contact