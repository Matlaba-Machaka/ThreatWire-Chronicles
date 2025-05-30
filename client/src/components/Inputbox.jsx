
import React from "react";

const Inputbox = ({
  label,
  name,
  type = "text",
  isRequired = false,
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label htmlFor={name} className='text-slate-900 dark:text-gray-500'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={isRequired}
        className='dark:bg-transparent appearance-none block w-full px-3 py-2.5 2xl:py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-300 dark:placeholder-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputbox;
