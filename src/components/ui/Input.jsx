/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const Input = React.forwardRef(function Input(
  { type = "text", delay = 0, className = "", onChange = () => {}, ...props },
  ref,
) {
  return (
    <motion.input
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay }}
      viewport={{ once: true }}
      ref={ref}
      type={type}
      className={`w-full p-4 shadow-md outline-none ${className}`}
      onChange={onChange}
      {...props}
    />
  );
});

export default Input;
