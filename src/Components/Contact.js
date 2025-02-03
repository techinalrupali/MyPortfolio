import React, { useRef } from 'react';
import "./index.css";
// import emailjs from '@emailjs/browser';
import "https://kit.fontawesome.com/d6f2a9f07b.js"
import { useForm } from "react-hook-form";
import axios from 'axios';
import {toast} from "react-hot-toast";



const Contact = () => {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit =async (data) => {
    const userinfo={
      name:data.name,
      number:data.number,
      email:data.email,
      message:data.message

    }
    try{
      await axios.post("https://getform.io/f/arooklgb",userinfo);
      toast.success("Your Message has been sent");
    }
    catch(error){
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  
  return (
    <>
    <section className='contact bg-gray-300' id="contact">
       <div className='content'>
       <h3 className="text-4xl font-semibold text-blue-800 ">
          Contact
          <span className="text-cyan-800">Us</span>
        </h3>
         <p> Please fill out the form below to contact me </p>
       </div>
       <div className='container'>
         <div className='contactInfo'>
             <div className='box'>
                <div className='icon'>
                <i class="fa-solid fa-location-dot fa-xl" style={{color: "#0c89e9",}} ></i>
                </div>

                <div className='text'>
                  <h3>Address</h3>
                  <p>Solapur-413004,<br/> Maharashtra, India</p>
                </div>
             </div>
             <div className='box'>
                <div className='icon'>
                <i class="fa-solid fa-envelope fa-xl" style={{color: "#0c89e9",}} ></i>
                </div>

                <div className='text'>
                  <h3>Email</h3>
                  <p>rupa99birajdar@gmail.com</p>
                </div>
             </div>
             <div className='box'>
                <div className='icon'>
                <i class="fa-solid fa-phone fa-xl" style={{color: "#0c89e9",}} ></i>
                </div>
                <div className='text'>
                  <h3>Phone</h3>
                  <p>+91 9359043036</p>
                </div>
             </div>
         </div>
         <div className='contactForm'>
           <form onSubmit={handleSubmit(onSubmit)} 
          //</div> action='' 
           // method="POST"
           >
             <h2 className=' text-xl font-semibold mb-4 '>Send Your Message</h2>
              <div className='inputBox'>
                <label className=' block text-gray-700'>Full Name</label>
               <input type="text" name="name" {...register("name", { required: true })}
                className='shadow appearance-none border rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter Full Name'/>
                {errors.name && <span>This field is required</span>}
              
               </div>
               <div className='inputBox'>
               <label className=' block text-gray-700'>Mobile Number</label>
               <input type="text" name="number" {...register("number", { required: true })}
               className='shadow appearance-none border rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Mobile number'/>
               {errors.number && <span>This field is required</span>}
             
               </div>
               <div className='inputBox'>
               <label className=' block text-gray-700'>Email</label>
               <input type="email" name="email" {...register("email", { required: true })} 
               className='shadow appearance-none border rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Email'/>
               {errors.email && <span>This field is required</span>}
             
               </div>
               <div className='inputBox'>
               <label className=' block text-gray-700'>Message</label>
               <textarea name="message" {...register("message", { required: true })} 
               className='shadow appearance-none border rounded py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Message'/>
               {errors.message && <span>This field is required</span> }
              
               </div>
               <div className='inputBox'>
               <input type="submit" name="" value="Send" className='rounded-xl px-3 py-2'/>
               
               </div>
               
           </form>
         </div>
        


       </div>
    </section>
 </>
  
  )
}

export default Contact;