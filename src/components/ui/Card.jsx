/* eslint-disable react/prop-types */

const Card = ({
  bgColor = "bg-white",
  textColor = "text-gray-600",
  children,
  className = "",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} border border-slate-200 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
