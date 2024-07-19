import React, { useRef } from 'react';
import "./index.css";
import emailjs from '@emailjs/browser';
import "https://kit.fontawesome.com/d6f2a9f07b.js"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ki6ind9', 'template_4ji8zzu', form.current, {
        publicKey: 'Jg_wEbYCW_3lS-fnW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  
  return (
    <>
    <section className='contact bg-gray-300' id="contact">
       <div className='content'>
       <h3 className="text-4xl font-semibold text-blue-800 ">
          Contact
          <span className="text-cyan-800">Us</span>
        </h3>
         <p>Thank You For Contact Me! Have a Nice Day </p>
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
           <form  ref={form} onSubmit={sendEmail}>
             <h2>Send Message</h2>
              <div className='inputBox'>
               <input type="text" name="from_name" required="required" />
               <span>Full Name</span>
               </div>
               <div className='inputBox'>
               <input type="text" name="from_number" required="required" />
               <span>Mobile Number</span>
               </div>
               <div className='inputBox'>
               <input type="email" name="from_email" required="required" />
               <span>Email</span>
               </div>
               <div className='inputBox'>
               <textarea name="message" required="required" />
               <span>Message</span>
               </div>
               <div className='inputBox'>
               <input type="submit" name="" value="Send" />
               
               </div>
               
           </form>
         </div>

       </div>
    </section>
 </>
  
  )
}

export default Contact;