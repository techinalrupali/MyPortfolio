import React from "react";
import Resume from "../Image/Rupali_Birajdar.pdf";
import MyImage from "../Image/MyImage.jpg";
import "./index.css";


const AboutUs = () => {
  const info=[
    {text:'Months Experience' , count:'06'},
    {text:'Completed Projects' , count:'2'},
    {text:'Certifications' , count:'1'},

  ]
  return (
    <section id="about" className="py-10 text-blue-800">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          About
          <span className="text-cyan-800"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="my-3 text-gray-600">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Bacially i am belong from Solapur currently located in Pune. I
                am Completed MCA from Punyashlok Ahilyadevi Holkar Solapur University,Solapur in 2022. 
                I have been fascinated by technology and creativity, which lead me towards this field. 
                I am passionate about developing application and website and improving my coding skills.
                I build WebApps and Websites using MERP Stack. Working for myself to improve my skills.
              </p>
              <div className="flex mt-10 gap-7">
                {
                   info.map((content)=>(
                   
                     <div className="bg-blue-950 p-1 rounded hover:bg-blue-900 md:p-4" >
                       <div key={content.text} >
                        <h3 className="md:text-4xl text-2xl font-semibold text-white ">{content.count}
                         <span className="text-cyan-600">+</span>{""}
                        </h3>
                         <span className="text-white md:text-base text-xs ">{content.text}</span>
                      </div>
                     </div>
                    
                 
                   ))
                }
              </div>
              <a href={Resume} download>
                <button className="bg-blue-950 hover:bg-blue-900 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 gap-2 mt-5 flex items-center">Download CV</button>
              </a>
            
            </div>
           
          </div>
         
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                <img src={MyImage} alt="" className="w-full object-cover rounded-xl " />
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
