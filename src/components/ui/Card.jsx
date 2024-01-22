/* eslint-disable react/prop-types */

const Card = ({ children, className = "" }) => {
    return (
        <div
            className={` bg-slate-100 border border-slate-200 rounded-md shadow-lg  ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;