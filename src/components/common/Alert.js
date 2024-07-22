import React from "react";

const Alert = ({ showAlert, closeAlert, showPromptAlert, closePromptAlert }) => (
  <>
    {showAlert && (
      <div className="alert-container">
        <div
          className="bg-red-100 border-l-4 border-red-400 text-red-700 p-4 rounded relative mt-5 w-full lg:w-[459px]"
          role="alert"
        >
          <strong className="font-bold">Not Enough Credits!</strong>
          <p className="font-normal text-base">You don't have enough credits to generate an image.</p>
          <button className="" onClick={closeAlert} aria-label="Close alert">
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
      </div>
    )}
    {showPromptAlert && (
      <div className="alert-container">
        <div
          className="bg-red-100 border-l-4 border-red-400 text-red-700 p-4 rounded relative mt-5 w-full lg:w-[459px]"
          role="alert"
        >
          <p className="font-bold">Too short!</p>
          <p className="block sm:inline font-normal text-base">
            The prompt should be at least 5 characters long and not just spaces.
          </p>
          <button className="" onClick={closePromptAlert} aria-label="Close alert">
            <svg
              className="absolute top-0 bottom-0 right-0 fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      </div>
    )}
  </>
);

export default Alerts;
