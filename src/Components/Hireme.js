import React from 'react'
import MyImage from "../Image/MyImage.jpg";

const Hireme = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-blue-800 '>
      <div className='text-center mt-8'>
        <h3 className="text-4xl font-semibold ">
          Hire
         <span className="text-cyan-800"> Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Do You Have Any Work?</p>

    </div>

    <div className='bg-gray-800 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-15 flex gap-6 lg:flex-row flex-col-reverse items-center'>
        <div>
           <h2 className='text-2xl font-semibold'>Do you want any work from me?</h2>
           <p className='lg:text-left text-justify max-w-lg text-m mt-4 text-gray-400 leading-6'>I should be hired because I am very good in my technical skill like HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT, Basic C#DOTNET. Along with technical skills my personal strengths are I am Quick Learner person, Helping Nature, Multitasking, Positive Thinker and Solving Problems person. If I get an opportunity to work in this company I will put in 100% efforts to achieve company goal.</p>

           <button className="bg-blue-500 hover:bg-blue-900 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 gap-2 mt-10 flex items-center">Say Hello</button>
        </div>
         <img src={MyImage} alt='' className=' lg:h-[32rem] h-50 rounded-full  object-cover'/>
    </div>

    </section>
  )
}

export default Hireme