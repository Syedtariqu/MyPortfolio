import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { motion } from "framer-motion"
import { getDefaultNormalizer } from '@testing-library/react';

const imgVariants = {
     hidden: {
          y: 50,
          opacity: 0,
     },
     visible: {
          y: 0,
          opacity: 1,
          transition: {
               duration: 2,
               delay: 0.2,
               type: "spring",
               stiffness: 80
          }
     }

}
const titleVariants = {
     hidden: {
          y: 30,
          opacity: 0
     },

     visible: {
          y: 0,
          opacity: 1,
          transition: {
               delay: 0.2,
               duration: 2,
               type: 'spring',
               stiffness: 100
          }
     }
}
const Contact = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");


     const [nameError, setNameError] = useState("");
     const [emailError, setEmailError] = useState("");

     const validate = () => {
          const errors = {}
          if (name === "") {
               errors.name = "Name is Required !";
          }
          if (email === "") {
               errors.email = "Email Address is Required !";
          }
          return Object.keys(errors).length === 0 ? null : errors;
     }

     const alertmsg = () => {
          alert(" Your message has been sent! Thank you! :) ");
     }


     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          const errors = validate();
          if (errors) {
               setNameError(errors.name);
               setEmailError(errors.email);

          }
          else {
               setNameError(" ");
               setEmailError(" ");

               //  FOR SYEDTARIQUE20@getDefaultNormalizer.COM 
               // emailjs.sendForm('service_rju08zo', 'template_tcltu83', form.current, 'psfPYaV67C65SBW-R')
               //      .then((result) => {
               //           console.log(result.text);
               //      }, (error) => {
               //           console.log(error.text);
               //      });



               //  FOR syedtariqueabedin.cse2020@nsec.ac.in
               emailjs.sendForm('service_qqbfvcg', 'template_e6o89dl', form.current, '9gTfyuzKssEmLrvPl')
                    .then((result) => {
                         console.log(result.text);
                    }, (error) => {
                         console.log(error.text);
                    });

               alertmsg();

          }


     };

     return (
          <>
               <section id="contact" className='antialiased bg-gray-100 '>
                    <div className="flex w-full min-h-screen justify-center items-center">
                         <div className='bg-cyan-700 w-full  max-w-4xl md:max-w-5xl p-5 rounded-xl shadow-lg text-white flex flex-col space-y-6 md:flex-row md:space-x-5 md:justify-between md:space-y-0 sm:p-10 overflow-hidden'>
                              <div className="flex flex-col mb-4 justify-between space-y-6">
                                   <div>
                                        <h1 className='font-bold text-4xl md:text-5xl tracking-wide'>Get In Touch</h1>
                                   </div>
                                   <div className='flex flex-col space-y-4'>
                                        <div className="inline-flex space-x-2 items-center">
                                             <i className="bi bi-telephone-fill text-3xl  text-cyan-300"></i>
                                             <span>+ (91) 8509416923</span>
                                        </div>
                                        <div className="inline-flex space-x-2 items-center">
                                             <i className="bi bi-envelope-fill text-3xl  text-cyan-300"></i>
                                             <span>  syedtarique20@gmail.com</span>
                                        </div>
                                        <div className="inline-flex space-x-2 items-center ">
                                             <i className="bi bi-geo-alt-fill text-3xl text-cyan-300"></i>
                                             <span> Khosbag , Indas , Bankura 722205</span>
                                        </div>
                                   </div>
                                   <motion.div
                                        variants={titleVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        className="flex space-x-8 text-4xl">
                                        <a href="https://www.facebook.com/syed.ayan.56808?mibextid=ZbWKwL" target="_blank"><i className="bi bi-facebook"></i></a>
                                        <a href="https://instagram.com/ayanexist?igshid=YzgyMTM2MGM=" target="_blank"><i className="bi bi-instagram"></i></a>
                                        <a href="https://github.com/Syedtariqu" target="_blank"><i className="bi bi-github"></i></a>

                                   </motion.div>
                              </div>
                              <div className=" relative">
                                   <div className="absolute z-0 w-60 h-60 rounded-full md:bg-teal-400 -top-20 -right-20"></div>
                                   <div className="absolute z-0 w-60 h-60 rounded-full md:bg-teal-400 left-4 top-4"></div>
                                   <div className="absolute z-0 w-60 h-60 rounded-full md:bg-teal-400 -bottom-16 -left-28"></div>
                                   <motion.div
                                        variants={imgVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        className=" bg-white rounded-xl shadow-lg p-7 text-gray-600 z-10 md:w-96 relative">

                                        <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                                             <div>
                                                  <label className="text-sm md:text-2xl">Your Name</label>
                                             </div>
                                             <div>
                                                  <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder='Your Name' name="from_name" value={name} className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300' />
                                                  <div className=" text-rose-800 pt-1 text-sm">{nameError}</div>
                                             </div>
                                             <div>
                                                  <label className="text-sm md:text-2xl">Email Address</label>
                                             </div>
                                             <div>
                                                  <input type="email" name="user_email" onChange={(e) => { setEmail(e.target.value) }} placeholder='abc@gmail.com' value={email} className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300' />
                                                  <div className="text-rose-800 pt-1 text-sm">{emailError}</div>
                                             </div>
                                             <div>
                                                  <label className="text-sm md:text-2xl">Message</label>
                                             </div>
                                             <div>
                                                  <textarea type="text" name="message" rows="4" placeholder='Type Your Message Here' className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300'></textarea>
                                             </div>
                                             <input type="submit" value="Send" className='  text-white btn-grad bnt text-lg font-semibold' />
                                        </form>
                                   </motion.div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Contact;