import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./ui/Input";
import Toast from "./ui/Toast";

const schema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Invalid email.").required("Email is required."),
    message: yup.string().required("Message is required."),
});

const Contact = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onSubmit = useCallback((data) => {
        setIsFormSubmitted(true);
        // console.log("Form submitted successfully." + data);
    }, []);

    // This useEffect will close the toast after 2s
    useEffect(() => {
        if (isFormSubmitted) {
            const timeoutId = setTimeout(() => {
                setIsFormSubmitted(false);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [isFormSubmitted]);

    return (
        <section id="contact" className="w-full relative shadow-inner">
            <AnimatePresence>
                {isFormSubmitted && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0 }}
                            className={`absolute top-0 left-0 w-screen h-screen z-20 bg-black`}
                        ></motion.div>
                        <Toast
                            className={`absolute top-1/2 left-0 right-0 z-30 mx-auto ${
                                isFormSubmitted
                                    ? "text-green-700"
                                    : "text-red-700"
                            }`}
                            onClose={() => setIsFormSubmitted(false)}
                        >
                            Form submitted successfully.
                        </Toast>
                    </>
                )}
            </AnimatePresence>
            <div className="max-w-7xl md:w-[90%] mx-auto px-4 py-14 md:py-[100px]">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-3xl text-center capitalize text-cyan-900 font-semibold mb-10 md:text-5xl dark:text-cyan-600"
                >
                    Contact Me
                </motion.h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="max-w-xl mx-auto flex flex-col gap-4">
                        <div className="w-full">
                            <Input
                                type="text"
                                placeholder="Name"
                                delay={0}
                                {...register("name")}
                                className={`border-2 rounded-sm focus:border-cyan-500 ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-transparent"
                                }`}
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className="w-full">
                            <Input
                                type="email"
                                placeholder="Email"
                                delay={0.6}
                                {...register("email")}
                                className={`border-2 rounded-sm focus:border-cyan-500 ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-transparent"
                                }`}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="w-full">
                            <motion.textarea
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.1 }}
                                viewport={{ once: true }}
                                {...register("message")}
                                cols="30"
                                rows="5"
                                className={`w-full p-3 border-2 focus:border-cyan-500 outline-none rounded-sm ${
                                    errors.message
                                        ? "border-red-500"
                                        : "border-transparent"
                                }`}
                                placeholder="Message"
                            ></motion.textarea>
                            {errors.message && (
                                <p className="text-sm text-red-600">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-full md:w-1/2 ms-auto p-3 mt-3 text-lg text-white font-medium bg-cyan-600 rounded-full shadow-lg shadow-cyan-600/50 hover:bg-cyan-800 hover:shadow-cyan-800/50"
                            type="submit"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
