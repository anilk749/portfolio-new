/* eslint-disable react/prop-types */

const Button = ({
    children,
    type = "button",
    textColor = "text-white",
    bgColor = "bg-cyan-600",
    className = "",
    onClick,
    ...props
}) => {
    return (
        <button
            className={`inline-block ${textColor} ${bgColor} ${className}`}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
