import React from 'react';
import Typical from 'react-typical';
import "./Profile.css"
import { motion } from "framer-motion"
const imgVariants = {
     hidden: {
          x: "400px",
          opacity: 0,
     },
     visible: {
          x: 0,
          opacity: 1,
          transition: {
               duration: 2,
               delay: 0.2,
               type: "spring",
               stiffness: 80
          }
     }

}
const ProfileVariants = {
     hidden: {
          x: "-200px",
          opacity: 0,
     },
     visible: {
          x: 0,
          opacity: 1,
          transition: {
               duration: 2,
               delay: 0.3,
               type: "spring",
               stiffness: 80
          }

     }
}


const Profile = () => {
     return (
          <>
               <div className='profile-container ' id='home'>
                    <div className='profile-parent '>
                         <motion.div
                              variants={ProfileVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className='profile-details'>
                              <div className='colz'>
                                   {/* <div className="colz-icon flex space-x-8 text-4xl">
                                        <a href="https://www.facebook.com/syed.ayan.56808?mibextid=ZbWKwL" target="_blank">
                                             <i class="bi bi-facebook"></i>
                                        </a>
                                        <a href="https://instagram.com/ayanexist?igshid=YzgyMTM2MGM=" target="_blank">
                                             <i class="bi bi-instagram"></i>
                                        </a>
                                        <a href="https://github.com/Syedtariqu" target="_blank">
                                             <i class="bi bi-github"></i>
                                        </a>
                                   </div> */}
                              </div>

                              <div className='profile-details-name'>
                                   <span className='primary-text'> {" "} Hello , I'M  <span className='highlighted-text'>  Syed Tarique Abedin</span></span>
                              </div>
                              <div className="profile-details-role">
                                   <span className='primary-text'>
                                        {" "}
                                        <h1>
                                             <Typical
                                                  loop={Infinity}
                                                  steps={[
                                                       "FrontEnd Dev 💻",
                                                       1000,
                                                       "React Dev 😎",
                                                       1000,
                                                       "A Learner ✌️",
                                                       1000,
                                                  ]}
                                             />
                                        </h1>
                                        <span className='profile-role-tagline'>
                                             Developer Gets It Done On Time. 🥇
                                        </span>
                                   </span><br />
                                   <div className="profile-option">
                                        <a href='#contact'>
                                             <button className="btn  primary-btn" >
                                                  {" "}
                                                  Hire Me{" "}
                                             </button>
                                        </a>
                                        <a href="Resume-1.pdf" download="Syed Resume-1.pdf">
                                             <button className=" btn highlighted-btn">Get Resume</button>
                                        </a>
                                   </div>
                              </div>
                         </motion.div>
                         <motion.div
                              variants={imgVariants}
                              initial="hidden" whileInView="visible" viewport={{ once: true }} className="profile-picture">
                              <motion.div className="profile-picture-background"></motion.div>
                         </motion.div>
                    </div>
               </div>

          </>
     )
}

export default Profile