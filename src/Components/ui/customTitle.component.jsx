/* eslint-disable react/prop-types */
const CustomTitle = ({ title, className }) => {
    return (
        <div className="mb-2 w-full">
            <h2 className={`title-font text-center font-medium
             sm:text-4xl py-3 lg:text-4xl dark:text-gray-200  text-gray-800 ${className}`}>
                {title}
            </h2>
            <hr />
        </div>
    );
};

export default CustomTitle;
