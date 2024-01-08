/* eslint-disable react/prop-types */

const Button = ({
  children,
  type = "button",
  textColor = "text-white",
  bgColor = "bg-cyan-600",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`inline-block ${textColor} ${bgColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
