import React from 'react'

const Navbar = () => {
  return (
    <>  
        <div className='relative z-40 '>
            <div className='fixed top-0 left-0 right-0'>
                <div className='flex items-center justify-between  h-[54px] bg-white border-[1px] border-slate-200 backdrop-blur-md bg-white/30 px-28'>
                    {/* Logo */}
                    <div className='border-b-[1px] p-inset-4 border-primary-dark inline-block tracking-tight'>
                        <p>
                            <span className='underline underline-offset-auto bg-gradient-to-r from-main-blue-dark to-main-blue-light bg-clip-text text-transparent text-[18px] font-extrabold '>@</span>
                            <span className='font-[500] font-righteous text-primary-dark text-[22px]'>nouvalrz</span>
                        </p>
                    </div>

                    {/* Nav Menu */}
                    <div className=''>
                        <ul className='flex justify-between w-[370px] font-manrope text-[15px] font-[600] tracking-tight text-primary-dark'>
                            <li className=''>
                                <a href="#" className=''>Home</a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>About</a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>Projects</a>
                            </li>
                            <li className=''>
                                <a href="#" className=''>Contacts</a>
                            </li>
                        </ul>
                    </div>

                    {/* Nav Icon */}
                    <div className='h-[31px] w-[100px] inline-block '>
                        <img src="/images/claps.png" alt="" className='h-[31px] float-right'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar