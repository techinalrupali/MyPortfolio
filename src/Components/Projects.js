import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Project1 from '../Image/Project1.png';
import Project2 from '../Image/Project2.png';
import Project3 from '../Image/Project3.png';
import Project4 from '../Image/Project4.png';
import Project5 from '../Image/Project5.png';
import Project6 from '../Image/Project6.png';
import "./index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

const Projects = () => {
    
  const proj=[
    {
    img:Project1,
    name:"Online Farming Store Products",
    github_link:'https://github.com/techinalrupali/farming-products',
    live_link:"https://onlinefarmingstore.netlify.app"
    },
    {
      img:Project2,
      name:"Bank Loan Application",
      github_link:'https://github.com/techinalrupali/Bank-Loan-Application',
      live_link:"https://bankloanapplication.netlify.app"
    },
    {
      img:Project3,
      name:"Rapid Api For Game Application",
      github_link:'https://github.com/techinalrupali/RapidAPIForGame',
      live_link:"https://rapidapiforgame.netlify.app"
    },
    {
      img:Project4,
      name:"To Do List",
      github_link:'https://github.com/techinalrupali/ToDoListProject',
      live_link:"https://demotoddolist.netlify.app"
    },
    {
      img:Project5,
      name:"My Travel-Tour Application",
      github_link:'https://github.com/techinalrupali/My-Travel-Tour',
      live_link:"https://mytraveltourbook.netlify.app"
    },
    {
      img:Project6,
      name:"Password Generator Application",
      github_link:'https://github.com/techinalrupali/password_generator',
      live_link:"https://mypasswordgenerate.netlify.app"
    },
  ]

  return (
   <section id='projects' className=' py-10 text-blue-800'>
    <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
            My<span className=' text-cyan-800'>Projects</span>
        </h3>
        <p className=' text-gray-400 mt-3 text-lg'>My Awesome Works</p>

    </div>
    <br/>
    <div className=' flex max-w-6xl px-5 mx-auto items-center justify-center relative'>
      <div className='lg:w-2/3 w-full'>
         <Swiper slidesPerview={1.2} spaceBetween={20} 
         breakpoints={{
            768: {
                  slidesPerView: 1,
                },
         }} 
         loop={true} 
         autoplay={{
            delay:3000,
         }}
          pagination={{
            clickable:true,
          }}
          modules={[Pagination, Autoplay]}
         >
         {
          proj.map((project_info,i)=>(
            <SwiperSlide key={i}>
            <div className='h-fit w-full p-4 bg-blue-950 rounded-xl'>
               <img src={project_info.img} alt="" className='rounded-lg'/>
               <h3 className='text-xl my-4 text-white'>{project_info.name}</h3>
               <div className='flex gap-3'>
                   <a href={project_info.github_link} target='_blank' 
                   className=' text-cyan-500 bg-gray-600 px-2 py-1 inline-block'>
                       Github
                   </a>
                   <a href={project_info.live_link} target='_blank'
                    className=' text-cyan-500 bg-gray-600 px-2 py-1 inline-block' >
                       Live Demo
                   </a>
               </div>
            </div>
          </SwiperSlide>
          ))
         }

          
         </Swiper>
      </div>


    </div>

   </section>
  )
}

export default Projects;