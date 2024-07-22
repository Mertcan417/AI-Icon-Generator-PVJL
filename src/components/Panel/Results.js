import React from "react";
import { TfiDownload } from "react-icons/tfi";

const Results = ({ results }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    } else {
      alert("Please allow pop-ups for this site");
    }
  };

  return (
    <>
      <h1 className="text-2xl mb-4">Results</h1>
      <div className="generated-icons-result rounded-2xl p-3 bg-white custom:w-full w-[526px] h-[632px] flex flex-wrap gap-4 lg:gap-10 overflow-auto justify-center">
        {results.map((url, index) => (
          <div key={index} className="image-container relative">
            <TfiDownload
              className="download-icon absolute top-0 left-1/2 transform -translate-x-1/2 text-white cursor-pointer hover:scale-125 transition-transform"
              onClick={() => openInNewTab(url)}
              aria-label={`Download image ${index + 1}`}
            />
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={url}
                alt={`Generated ${index}`}
                className="w-48 h-48 object-cover rounded-full cursor-pointer"
                onClick={() => openInNewTab(url)}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;
