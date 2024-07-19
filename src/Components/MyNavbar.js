import React, { useEffect, useState } from 'react'

const MyNavbar = () => {
  const [sticky,setSticky]= useState(false);
  const [open,setOpen]= useState(false);



  const menuLinks =[
    {name:'HOME',link:"#home"},
    {name:'ABOUTUS',link:"#about"},
    {name:'SKILLS',link:"#skills"},
    {name:'RESUME',link:"#resume"},
    {name:'PROJECTS',link:"#projects"},
    {name:'CONTACT',link:"#contact"},
    

    

  ];
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav=document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true):setSticky(false);
    });
  },[])

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-blue-400/60 text-blue-950":"text-black"}`}>
      <div className=' flex items-center justify-between'>
        <div className='mx-7'>
          <h4 className='text-4xl uppercase font-bold'>
            ru<span className=' text-cyan-600'>pa</span>li
          </h4>

        </div>
        <div 
        className={` ${sticky ? "bg-blue-200/0 bg-blue-400 ":"bg-blue-300"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
          <ul className='flex items-center text-white gap-1 py-2 text-lg '>
           {
            menuLinks.map((menu,i)=>(
              <li key={i} className='px-6'>
              <a href={menu.link} className='no-underline text-blue-950  hover:text-white ' >{menu.name}</a>
            </li>
            ))
           }
          </ul>

        </div>
        <div onClick={()=>setOpen(!open)}
         className={`z-[999] ${open?"text-gray-900" : "text-gray-500"} text-3xl md:hidden m-5`} >
           <ion-icon name="menu"></ion-icon>
        </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-blue-400 top-0  duration-300 right-0 ${open? "right-0":"right-[-100%]"}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
              {
                menuLinks.map((menu,i)=>(
                  <li key={i} className='px-6 hover:to-blue-950'>
                    <a href={menu.link} className='no-underline text-blue-950  hover:text-white '>{menu.name}</a>
                  </li>
                ))
              }
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default MyNavbar;