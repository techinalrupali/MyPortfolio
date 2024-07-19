import React from 'react';
import "./index.css";
import "https://kit.fontawesome.com/d6f2a9f07b.js";


const Skills = () => {
  const skills=[
    {
      logo:'logo-html5',
      sub:'HTML',
      level:'Advance', 
      count:86,
    },
    {
      logo:'logo-css3',
      sub:'CSS',
      level:'Intermediate',
      count:75,
    },
    {
      logo:"logo-javascript",
      sub:'JAVASCRIPT',
      level:'Intermediate',
      count:75,
    },
    {
      logo:'logo-react',
      sub:'REACT',
      level:'Beginner',
      count:70,
    },
    {
      logo:'logo-github',
      sub:'GITHUB',
      level:'Beginner',
      count:70,
    },
    // bg-gray-800

  ];
  return (
    <section id="skills" className="py-10  relative">
      <div className='mt-8 text-blue-800  text-center'>
        <h3 className="text-4xl font-semibold">My <span className="text-cyan-800">Skills</span></h3>
         <p className='text-gray-400 mt-3 text-lg '>My Knowledge</p>
        <div className=' flex items-center justify-center mt-10 gap-10 flex-wrap text-white '>
          {
            skills.map((skill,i)=>(
              <div key={i} className='myskill border-1 border-blue-500 relative min-w-[10rem] max-w-[16rem] bg-blue-950 p-4 rounded-xl '>
            <div style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
            }}
            className="w-32 h-32 flex items-center justify-center rounded-full">
             <div className='text-6xl w-28 h-28 bg-blue-950 rounded-full flex items-center justify-center '>
             <ion-icon name={skill.logo}></ion-icon>
             </div>
            </div>
            <h6 className='mt-3 text-gray-300 font-bold'>{skill.count}%</h6>
            <p className=' text-xl mt-3 text-gray-400 font-bold'>{skill.sub}</p>
            <p className=' text-xl mt-3 '>{skill.level}</p>

          </div>
            ))
          }
           <div className='myskill border-1 border-blue-500 relative min-w-[10rem] max-w-[16rem] bg-blue-950 p-4 rounded-xl '>
            <div style={{
                  background: `conic-gradient(rgb(8,145,170) 90%, #ddd 90%)`,
            }}
            className="w-32 h-32 flex items-center justify-center rounded-full">
             <div className='text-6xl w-28 h-28 bg-blue-950 rounded-full flex items-center justify-center '>
             <i class="fa-brands fa-bootstrap"></i>
             </div>
            </div>
            <h6 className='mt-3 text-gray-300 font-bold'>86%</h6>
            <p className=' text-xl mt-3 text-gray-400 font-bold'>BOOTSTRAP</p>
            <p className=' text-xl mt-3 '>Advance</p>

          </div>
 
        </div>
         
         
     </div>

 

      <div className='py-10 relative bg-gray-800 my-3'>
           <div className='mt-10 text-gray-100 text-center'>
            <p className='text-gray-400 mt-3 text-lg'>My Languages</p>
             
             <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
                <div className=' border-2 border-blue-500 relative min-w-[10rem] max-w-[16rem] bg-blue-950 p-3 rounded-xl'>
                    <div style={{
                  background: `conic-gradient(rgb(8,145,170) 70%, #ddd 70%)`,
                  }}
                    className='w-32 h-32 flex items-center justify-center rounded-full'>
                     <div className='text-6xl w-28 h-28 bg-blue-950 rounded-full flex items-center justify-center'>
                     <i class="fa-solid fa-e"></i>
                     </div>

                    </div>
                    <p className=' text-xl mt-3 text-gray-400 font-bold'>English</p>
                    <p className='text-xl mt-3'>Beginner</p>
                    
                    
                </div>


                <div className=' border-2 border-blue-500 relative min-w-[10rem] max-w-[16rem] bg-blue-950 p-3 rounded-xl'>
                    <div style={{
                  background: `conic-gradient(rgb(8,145,170) 75%, #ddd 75%)`,
                  }}
                    className='w-32 h-32 flex items-center justify-center rounded-full'>
                     <div className='text-6xl w-28 h-28 bg-blue-950 rounded-full flex items-center justify-center'>
                     <i class="fa-solid fa-h"></i>
                     </div>

                    </div>
                    <p className=' text-xl mt-3 text-gray-400 font-bold'>Hindi</p>
                    <p className='text-xl mt-3'>Intermediate</p>
                    
                    
                </div>

                <div className=' border-2 border-blue-500 relative min-w-[10rem] max-w-[16rem] bg-blue-950 p-3 rounded-xl'>
                    <div style={{
                  background: `conic-gradient(rgb(8,145,170) 90%, #ddd 90%)`,
                  }}
                    className='w-32 h-32 flex items-center justify-center rounded-full'>
                     <div className='text-6xl w-28 h-28 bg-blue-950 rounded-full flex items-center justify-center'>
                     <i class="fa-solid fa-m"></i>
                     </div>

                    </div>
                    <p className=' text-xl mt-3 text-gray-400 font-bold'>Marathi</p>
                    <p className='text-xl mt-3'>Advance</p>
                    
                    
                </div>
              </div>
             </div>
              
           </div>

        
         
       
      
    </section>
  )
}

export default Skills;