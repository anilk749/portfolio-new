/* eslint-disable react/prop-types */
// import React from 'react';
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { motion } from "framer-motion";

const Toast = ({className="", onClose, children}) => {
  return (
    <motion.div
      initial={{opacity: 0, scaleY: 0}}
      whileInView={{opacity: 1, scaleY: 1}}
      transition={{duration: .3}}
      exit={{opacity: 0, scaleY: 0}}
      className={`${className} w-10/12 md:w-full max-w-sm p-4 flex items-center shadow rounded-lg bg-slate-100 dark:bg-slate-300`}>
        <div>{children}</div>
        <Button type='button' textColor="text-gray-600" bgColor="bg-transparent" className='ms-auto text-xl rounded-md p-1 duration-300 hover:bg-slate-200' onClick={onClose}><MdClose/></Button>
    </motion.div>
  )
}

export default Toast