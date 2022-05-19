import React from 'react'
// import Parallax from 'parallax-js';
// import Parallax from '../parallax.js'

// var scene = document.getElementById('parallax-content');
// console.log(scene)
// var parallaxInstance = new Parallax(scene);

const Hero = () => {
  return (
    <>
        
        <div className='back-particles-overlay flex items-center -mt-20 px-28 tracking-tight w-screen relative'>
            <div className='flex items-center justify-between w-full mt-44'>
                <div className=''>
                    <p className='font-manrope text-[30px] font-[600] text-primary-dark'>Hi, There!</p>
                    <p className='-mt-4'>
                        <span className='font-manrope text-[64px] font-[700] text-primary-dark'>I'm</span>
                        <span className='font-manrope text-[64px] font-[800] gradient-blue'> Nouval Rizky</span>
                    </p>
                    <p className='font-manrope text-[38px] -mt-2'>a Programmer & Designer</p>
                    <button className='bg-primary-dark text-white px-8 py-3 rounded-xl font-manrope font-semibold mt-12'>Discover Now</button>
                    
                </div>
                <div>
                    <div id='parallax-content'>
                        <div className='lg:h-[500px] lg:w-[411px] md:h-[400px] md:w-[311px] z-30 relative' data-depth="0.6">
                            <img src="/images/nouval.png" alt="" />
                        </div>
                        <div className='z-30 w-[70px] h-[70px] absolute top-[370px] right-[150px]' data-depth="0.7">
                            <img src="/images/circle-red.svg" alt="" className=''/>
                        </div>
                        <div className='z-30 w-[90px] h-[90px] absolute top-[470px] right-[420px]' data-depth="0.2">
                            <img src="/images/circle-blue.svg" alt=""/>
                        </div>
                        <div className='z-30 w-[90px] h-[90px] absolute top-[570px] right-[220px]' data-depth="0.3">
                            <img src="/images/circle-green.svg" alt=""/>
                        </div>
                    </div>


                    <div className='absolute top-[230px] -right-28'>
                        <div className='w-64 h-64 bg-[#66E7FF] rounded-full blur-3xl opacity-50'></div>
                    </div>
                    <div className='absolute top-[400px] -right-20'>
                        <div className='w-96 h-96 bg-[#FF7BBA] rounded-full blur-3xl opacity-40'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-16 w-screen  z-30 relative -mt-10 gradient-blue-bg overflow-hidden'></div>
        {/* <div className='h-16 w-full  z-30 relative -mt-10 bg-gradient-to-tr from-main-blue-dark to-main-blue-light'></div> */}
        <div className='h-32 w-screen bg-white border-[1px] border-slate-200 backdrop-blur-md bg-white/20 z-30 relative -mt-5 overflow-hidden'></div>


    </>
  )
}

export default Hero