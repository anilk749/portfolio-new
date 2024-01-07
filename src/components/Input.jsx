/* eslint-disable react/prop-types */


const Input = ({type, name, placeholder, value, onChange}) => {
  return (
    <input
        type={type}
        name={name}
        className="p-4 shadow-sm border outline-none rounded-lg duration-300 hover:ring hover:ring-cyan-400 hover:ring-offset-2 focus:ring focus:ring-cyan-400 focus:ring-offset-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
  )
}

export default Input