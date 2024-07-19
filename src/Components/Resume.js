import React from "react";
import "https://kit.fontawesome.com/d6f2a9f07b.js";
import certificate from "../Image/certificate-Rupali Birajdar.pdf";
import certificate2 from "../Image/Intershipcertificate-Rupali Birajdar.JPG"
import "./index.css";

const Resume = () => {
  const educ_info = [
    {
      year: "2014-2015",
      std: "SSC",
      school: "Modern High School, Solapur, Maharashtra, India",
    },
    {
      year: "2016-2017",
      std: "HSC",
      school: "H.D.Junior High School, Solapur, Maharashtra, India",
    },
    {
      year: "2017-2020",
      std: "B.SC(ECS)",
      school: "Sangmeshwar College, Solapur, Maharashtra, India",
    },
    {
      year: "2020-2022",
      std: "MCA",
      school:
        "Punyashlok Ahilyadevi Holkar Solapur University, Solapur, Maharashtra, India",
    },
  ];
  
  return (
    <section id="resume" className="py-10 px-3 text-blue-800 ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          My
          <span className="text-cyan-800"> Resume</span>
        </h3>
        <div className="flex md:flex-row flex-col 
          md:gap-6 gap-12  max-w-6xl mx-auto">
          <div className="p-2">
            <div className="my-3 text-gray-600">
               <h4>Eduction</h4> 
            <div className="text-justify  w-11/12 mx-auto">
            <div className="border-l-4 border-blue-950 px-3">
            {
              educ_info.map((edu,i)=>(
                <div className="box relative p-3 border-4 border-blue-400 bg-blue-950 cursor-pointer text-white text-start mb-3 hover:shadow-2xl">
                    <h4><i class="fa-solid fa-calendar-days"></i> {edu.year}</h4>
                    <h3>{edu.std}</h3>
                    <p>{edu.school}</p>
                </div>
                
              ))
            }
      </div>
            </div>
            </div>
          </div>
          <div className="p-2">
            <div className="my-3 text-gray-600">
               <h4>Interships</h4> 
            <div className="text-justify w-11/12 mx-auto">
            <div className="border-l-4 border-blue-950 px-3">

          <div className="box relative p-8 border-4 border-blue-600 bg-blue-950 cursor-pointer text-white text-start mb-3 hover:shadow-2xl hover:border-2">
              <h4><i class="fa-solid fa-calendar-days"></i> 2022-2023 (6 Months)</h4>
              <h3>Software Develoer</h3>
              <h4>Sagitec Solution Pvt Ltd.Pune, India</h4>
              <p>
              <li>Working with OOPS,Html, CSS,C#, Database,Sql. Working with
               Entities,Forms,Data Validation and Data search.</li>
               <li> Working with Relational data.</li> 
               <li>Inproving and Maintenance Forms.
               Additional Features with Customisation working with
               Logical Rules.</li> 
               <li>Working with Decision Table and Chart.
               Basic Project1- Online Restaurant Management System
               Project.
               </li>
             </p>
             <li>
              <a href={certificate2} className="text-white text-2xl font-bold">Certificate</a>
            </li>
          </div>
          
                
              
            
      </div>
      </div>
            </div>
            </div>

            <div className="p-2">
            <div className="my-3 text-gray-600">
               <h4>Certifications</h4> 
            <div className="text-justify w-11/12 mx-auto">
            <div className="border-l-4 border-blue-950 px-3">

          <div className="box relative p-10 border-4 border-blue-600 bg-blue-950 cursor-pointer text-white text-start mb-3 hover:shadow-2xl hover:border-2">
              <h4><i class="fa-solid fa-calendar-days"></i> 2022-2023 (6 Months) </h4>
              <h3>Full Stack Web Develoer</h3>
              <h4>Think Quotient Software Pvt Ltd. Pune, India</h4>
              <p>
              <li>C#DotNet, SQL, HTML, CSS</li>
              </p>
              <li>
              <a href={certificate} className="text-white text-2xl font-bold">Certificate</a>
              </li>
          </div>
          
                
              
            
      </div>
      </div>
            </div>
            </div>
             

          </div>
      </div>
       
     

    
    </section>
  );
};

export default Resume;
