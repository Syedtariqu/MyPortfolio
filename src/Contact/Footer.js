import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=' bg-gray-100 text-black-50 h-full '>
        <div className="grid md:grid-cols-2 grid-cols-1  pt-3 pb-2 text-center  text-xl ">
          <span className=""> @2022 All Rights Reserved </span>
          <span className=""> Developed By <span className=" text-cyan-500 text-2xl cursor-pointer hover:text-cyan-900 font-bold"> Ayan</span> </span>
        </div>

      </footer>
    </>
  )
}

export default Footer;