import React from 'react'
import Card from './Card'
import "./Resume.css"
import Data from "./Data"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <>
      <section className="resume container  section" id="resume">
        <div className="section_title">
          <h1>Resu<span>Me</span> </h1>
        </div>
        <div className="resume_container grid">
          <motion.div className="timeline grid order-2 order-lg-1">
            {Data.map((val, index) => {
              return (
                <Card key={val.id} icon={val.icon} year={val.year} degree={val.degree} name={val.name} />

              )
            })}
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Resume ;