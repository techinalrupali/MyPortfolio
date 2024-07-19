import React from 'react';
import MyImage from '../Image/MyImage.jpg';
import "./index.css";

const Home = () => {
  const social_media=[
    'logo-instagram',
    'logo-github',
    'logo-linkedin',
    'logo-twitter',
  ]
  return (
     <section id='home' className=' min-h-screen flex py-10 md:flex-row flex-col items-center'>
    <div className="flex-1 flex items-center justify-center h-full">
    <img src={MyImage} alt='' className=" intro-img md:w-8/12 h-full object-cover rounded-full"/>
    </div>
    

  <div className="flex-1">
         <div className="md:text-left text-center">
          <h1 className="md:text-5xl md:mt-3 text-2xl md:leading-normal leading-10 text-blue-950 font-bold">
            <span className="text-cyan-800 md:text-6xl text-5xl ">
               Hello!
               <br/>
            </span>
            My Name is <span>Rupali Birajdar</span>
          </h1>
          <h4 className="md:text-2xl texl-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">
             FullStack Web Developer
          </h4>
        
        
          <button className="bg-blue-950 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 items-center gap-2
          mt-2">Contact Us</button>
         
            <div className="mt-4 text-4xl flex items-center  justify-center gap-4">
              {
                social_media.map((icon)=>(
                  <div key={icon} className="text-gray-500 hover:text-blue-950 cursor-pointer">
                    <ion-icon name={icon}></ion-icon>
                    </div>
                ))
              }
            </div>
         </div>
      </div>
      </section>
  )
}

export default Home;