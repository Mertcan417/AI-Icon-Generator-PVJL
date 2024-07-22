import React from "react";

const Input = ({
  type,
  label,
  value,
  onChange,
  showAlert,
  alertMessage,
  setShowAlert,
  inputProps,
}) => {
  return (
    <div className="input-section">
      <h1 className="text-2xl mb-4">{label}</h1>
      {type === "textarea" ? (
        <textarea
          className="input-text rounded-2xl text-base font-normal custom:w-full p-3 w-[459px] h-[144px] border border-gray-300"
          value={value}
          onChange={onChange}
          {...inputProps}
        ></textarea>
      ) : type === "file" ? (
        <input
          className="block w-[459px] bg-blue-600 p-4 text-white text-lg rounded-lg cursor-pointer focus:outline-none"
          type="file"
          onChange={onChange}
          {...inputProps}
        />
      ) : (
        <input
          type={type}
          className="input-text rounded-2xl p-3 font-normal w-full lg:w-[459px] border border-gray-300"
          value={value}
          onChange={onChange}
          {...inputProps}
        />
      )}
      {showAlert && (
        <div
          className="bg-red-100 border-l-4 border-red-400 text-red-700 p-4 rounded relative mt-5 w-full lg:w-[459px]"
          role="alert"
        >
          <strong className="font-bold">{alertMessage.title}</strong>
          <p className="font-normal text-base">{alertMessage.body}</p>
          <button
            className=""
            onClick={() => setShowAlert(false)}
            aria-label="Close alert"
          >
            <svg
              className="fill-current h-6 w-6 text-red-500 absolute top-0 right-0"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;
