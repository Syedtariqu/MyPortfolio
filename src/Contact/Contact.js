import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { motion } from "framer-motion"

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

     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_rju08zo', 'template_tcltu83', form.current, 'psfPYaV67C65SBW-R')
               .then((result) => {
                    console.log(result.text);
               }, (error) => {
                    console.log(error.text);
               });
     };
     return (
          <>
               <section id="contact" className='antialiased bg-gray-100 '>
                    <div className="flex w-full min-h-screen justify-center items-center">
                         <div className='bg-cyan-700 w-full  max-w-4xl md:max-w-5xl p-5 rounded-xl shadow-lg text-white flex flex-col space-y-6 md:flex-row md:space-x-6 md:justify-between md:space-y-0 sm:p-12 overflow-hidden'>
                              <div className="flex flex-col justify-between space-y-8">
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
                                                  <input type="text" autoComplete='off' placeholder='Your Name' name="from_name" className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300' />
                                             </div>
                                             <div>
                                                  <label className="text-sm md:text-2xl">Email Address</label>
                                             </div>
                                             <div>
                                                  <input type="email" autoComplete='off' name="user_email" placeholder='abc@gmail.com' className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300' />
                                             </div>
                                             <div>
                                                  <label className="text-sm md:text-2xl">Message</label>
                                             </div>
                                             <div>
                                                  <textarea type="text" autoComplete='off' name="message" rows="4" placeholder='Type Your Message Here' className=' ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300'></textarea>
                                             </div>
                                             <input type="submit" value="Send Message" className=' hover:bg-cyan-800 transition-all  inline-block self-end bg-cyan-700 text-white bnt font-bold rounded-lg px-6 py-2 uppercase md:text-xl text-sm' />
                                        </form>
                                   </motion.div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Contact