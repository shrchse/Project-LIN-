import Link from 'next/link'
import { FaInstagram, FaGithub, FaLinkedin, FaCode, FaPython, FaReact, FaHtml5, FaJsSquare, FaGithubSquare } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiReact } from 'react-icons/si';
import Accordion from './component/Accordion';
import Observer from './component/Observer';

export default function Home() {

    

    return (
        <main className="overflow-x-hidden">
            <div className='w-screen h-screen overflow-x-hidden snap-normal snap-y scroll-smooth'>
                <section className='w-screen h-screen snap-center bg-cover bg-center bg-fixed' style={{ backgroundImage: "url('/image/background.jpg')" }}>
                    <div className='h-screen flex justify-center items-center'>
                        <Observer animationStyle={'fade-in-tb-d-2'}>
                            <p className='relative translate-y-14 md:translate-x-[315px] translate-x-[175px] text-lg opacity-60'> Designing Experiences <br />  <span className="flex items-center">Developing Futures <FaCode className="ml-2 text-xl" /></span></p>
                        </Observer>
                        <Observer animationStyle={'fade-in-tb'}>
                            <p className='text-5xl md:text-7xl tracking-widest font-semibold -translate-x-16'>-LIN-</p>
                        </Observer>

                        <div className='flex flex-col relative md:right-[57%] right-80 md:top-60 top-[37%] items-center'>
                            <Observer animationStyle={'fade-in-tb'}>
                                <Link href="https://www.instagram.com/shrcse.lin/" passHref>
                                    <FaInstagram className='text-5xl py-1 my-2 cursor-pointer text-white' />
                                </Link>
                            </Observer>
                            <Observer animationStyle={'fade-in-tb-d-2'}>
                                <Link href="https://github.com/shrchse/" passHref>
                                    <FaGithub className='text-5xl py-1 my-2 cursor-pointer text-white' />
                                </Link>
                            </Observer>
                            <Observer animationStyle={'fade-in-tb-d-3'}>
                                <Link href="https://www.linkedin.com/in/your_username/" passHref>
                                    <FaLinkedin className='text-5xl my-2 py-1 cursor-pointer text-white' />
                                </Link>
                            </Observer>
                        </div>
                    </div>
                </section>

                <section className='w-screen h-screen snap-proximity p-0 md:p-20 bg-slate-200'>
                    <div className='w-full h-full md:grid grid-cols-2 hidden'>
                    <div className='grid p-5 grid-cols-2 grid-rows-2'>
                        <div className='bg-slate-600 rounded-3xl rounded-br-3xl bg-cover bg-center' style={{ backgroundImage: "url('/image/img.png')"}}></div>
                        <div className='bg-slate-300 h-full p-8 text-lg pt-14 rounded-3xl my-auto'>"Hi, My name is Oling Anugrah Fajar Pratama, I'm a Student of IT Department in Lambung Mangkurat University, Banjarmasin, Indonesia"</div>
                        <div className='bg-slate-400 h-full p-8 text-lg pt-14 rounded-3xl my-auto'>"I've been a part of Hasnur Centre in Programmer Divisons on MBKM Program, I've met and work together with many awesome people around Indonesia"</div>
                        <div className='bg-slate-500 rounded-3xl bg-cover bg-center' style={{ backgroundImage: "url('/image/asset-about1.jpeg')"}}></div>
                    </div>
                        <div className='mt-40 ml-10'>
                            <p className='text-4xl'>I'm Oling Anugrah Fajar Pratama <br /> <span className='text-xl'>a passionate Programmer that love to learn and exploring technology</span></p> 
                            <div className='flex space-x-2 my-6'>
                                <FaPython className='text-5xl'/><FaHtml5 className='text-5xl'/><FaReact className='text-5xl'/><FaJsSquare className='text-5xl'/><FaGithubSquare className='text-5xl'/>
                            </div>             
                            <p>Let me help you with anything you need</p> 
                            <button className='px-6 py-2 rounded-lg bg-slate-400 mr-3 mt-4 hover:bg-slate-200 shadow-lg'>Contact Me</button>          
                            <button className='px-6 py-2 rounded-lg border border-violet-400 hover:bg-violet-100 shadow-lg'>My Portofolio</button>          
                        </div>
                    </div>

                    {/* Mobile */}
                    
                    <div className='h-full w-full bg-secondary md:hidden pt-24 text-primary text-center'>
                        <div className='w-5/6 h-2/5 rounded-2xl bg-accent-2 mx-auto bg-cover bg-center slide' style={{ backgroundImage: "url('/image/img.png')"}}></div>
                        <p className='text-4xl px-10 mt-10 slide'>Oling Anugrah Fajar Pratama</p>
                        <p className='text-xl px-10 slide'>Passionate Programmer that love to learn and exploring technology</p>
                        <div className='flex space-x-2 my-7 justify-center slide'>
                                <FaPython className='text-5xl'/><FaHtml5 className='text-5xl'/><FaReact className='text-5xl'/><FaJsSquare className='text-5xl'/><FaGithubSquare className='text-5xl'/>
                        </div>
                        <p className='slide'>Let me help you with anything you need</p>
                            <button className='px-6 py-2 rounded-lg mr-3 mt-4 bg-accent-2 text-primary slide'>Contact Me</button>          
                            <button className='px-6 py-2 rounded-lg border-primary border slide'>My Portofolio</button>
                    </div>
                </section>

                <section className='h-fit min-h-screen w-screen bg-secondary pt-28 text-primary'>
                    <p className='text-3xl px-5 slide'>Featured Services at it's Best Prices</p>
                    <p className='text-lg px-5 pt-3 slide'>Offering you the best prices of services, including maintain and many things to develop your project from scratch</p>
                    
                        <div className='flex flex-col px-5 h-3/5 mt-10'>
                            <div className='slide'>
                                <Accordion 
                                content={ <div>
                                    <h1>Developing fully working website from back to front as flexible as you need. The website is customizable with the best price you can get</h1>
                                    <div className='flex flex-row-reverse py-4 text-5xl text-accent-2 gap-1'>
                                        <SiNextdotjs/>
                                        <FaReact/>
                                        <FaJsSquare/>
                                        <FaHtml5/>
                                    </div>
                                </div> } title={'Web Development'}/>
                            </div>
                            <div className='slide'>
                                <Accordion content={
                                    <div>
                                        <h1>Developing Android App for any of your project, using the latest technology of React Native or Flutter</h1>
                                        <div className='flex flex-row-reverse py-4 text-5xl text-accent-2 gap-1'>
                                            <SiFlutter/>
                                            <SiReact/>
                                        </div>
                                    </div>
                                } title={'Android App Development (Coming Soon)'}/>
                            </div>
                            <div className='slide'>
                                <Accordion content={'Providing you IT support for any of your project'} title={'IT Support (Coming Soon)'}/>
                            </div>
                        </div>

                </section>

            </div>
        </main>

// <div className='text-3xl font-light py-6 pl-1'>Featured Services</div>
// <div className='w-full h-1/4 bg-secondary rounded-md shadow-md px-5 pt-5 relative'>
//     <p className='text-2xl font-extralight'>Website Development</p>
//     <p className='text-lg mt-5'>Costumize Your own website as free as your will with cheap price and full support</p>
//     <button className='bg-accent-2 rounded-full w-10 h-10 absolute right-5 bottom-5'>+</button>
// </div>
// <div className='w-full h-1/3 bg-accent mt-5'></div>

//<div className='grid grid-cols-2 grid-rows-2 w-screen h-4/6 mt-32'>
//<div className='bg-gray-400 rounded-tl-[85px] text-primary'>
//    <img src="/assets/web-dev-svg.svg" alt="web-dev" className='w-44 mx-auto mt-10'/>
//    <p className='text-xl text-center'>Web Development</p>
//</div>
//<div className='bg-accent rounded-tr-[85px]'></div>
//<div className='bg-accent-3'></div>
//<div className='bg-secondary'></div>
//</div>
    )
}