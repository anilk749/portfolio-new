import Input from "./Input";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <section id="contact" className='max-w-5xl mx-auto my-10'>
        <div className="p-4">
            <h2 className="text-3xl text-center capitalize text-cyan-900 font-semibold mb-10 md:text-5xl dark:text-cyan-600">Contact</h2>
            <form action="">
                <div className="max-w-xl mx-auto flex flex-col gap-4">
                    <Input type="text" name="name" placeholder="Name"/>
                    <Input type="text" name="email" placeholder="Email"/>
                    <textarea name="message" id="" cols="30" rows="7" className="p-3 border outline-none rounded-lg hover:ring hover:ring-cyan-400" placeholder="Message"></textarea>
                    <button className="w-full md:w-1/2 ms-auto p-3 mt-4 text-lg text-white font-medium bg-cyan-600 rounded-full duration-500 shadow-lg shadow-cyan-600/50 hover:bg-cyan-800 hover:shadow-cyan-800/50" onClick={handleSubmit}>Send Message</button>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact