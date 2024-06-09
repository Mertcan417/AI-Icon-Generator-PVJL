// Panel.js
import { IoIosSettings } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import { TfiDownload } from "react-icons/tfi";
import LoadingScreen from "./LoadingScreen";  // Import the LoadingScreen component

export default function Panel({ setCredits, credits }) {
  const [prompt, setPrompt] = useState("");
  const [amount, setAmount] = useState(1);
  const [quality, setQuality] = useState("Mid");
  const [results, setResults] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showPromptAlert, setShowPromptAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // Add loading state

  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    console.log("LOCALSTORAGE CREDITS: " + savedCredits);
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    } else {
      setCredits(2);
    }
  }, []);

  const saveCredits = (credits) => {
    localStorage.setItem("credits", credits.toString());
  };

  const generateImage = async () => {
    if (prompt.trim().length < 5) {
      setShowPromptAlert(true);
      return;
    }

    if (credits <= 0) {
      setShowAlert(true);
      return;
    }

    setIsLoading(true);  // Show loading screen

    try {
      const response = await axios.post("/api/proxy", {
        prompt: prompt.trim(),
        samples: amount,
        quality: quality.toUpperCase(),
      });

      setCredits((prevCredits) => prevCredits - 1);
      saveCredits(credits - 1);

      const imageUrls = response.data.data.map((item) => item.asset_url);
      setResults((prevResults) => [...prevResults, ...imageUrls]);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);  // Hide loading screen
    }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    } else {
      alert("Please allow pop-ups for this site");
    }
  };

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 4 || value === 0) {
      setShowAlert(true);
      setAmount(4);
    } else {
      setShowAlert(false);
      setAmount(value);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const closePromptAlert = () => {
    setShowPromptAlert(false);
  };

  return (
    <div className="panel rounded-3xl mt-6 mx-32 flex py-6 px-10 font-bold flex-wrap bg-gray-100 text-xl">
      {isLoading && <LoadingScreen />}  {/* Render loading screen when isLoading is true */}
      <div className="panel-left grow flex flex-col mt-7">
        <div className="generate-icon-section">
          <h1>Generate Icon</h1>
          <textarea
            className="generate-icon-text rounded-2xl text-base font-normal p-3 w-[459px] h-[144px]"
            placeholder="Type here to create an icon (min 5 characters)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          ></textarea>
          {showPromptAlert && (
            <div
              className="bg-red-100 border-l-4 border-red-400 text-red-700 p-4 rounded relative mt-5 w-[459px]"
              role="alert"
            >
              <p className="font-bold">Too short!</p>
              <p className="block sm:inline font-normal text-base">
                The prompt should be at least 5 characters long and not just spaces.
              </p>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={closePromptAlert}
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
        </div>
        <div className="quality-section mt-7">
          <h1>Quality</h1>
          <div className="quality-buttons bg-white rounded-3xl flex justify-center items-center max-w-[459px] h-[144px]">
            <div className="flex gap-10">
              {["Low", "Mid", "High"].map((q) => (
                <button
                  key={q}
                  className={`w-24 h-16 px-4 py-2 rounded-3xl font-normal ${
                    quality === q ? "bg-blue-950" : "bg-blue-600"
                  } text-white`}
                  onClick={() => setQuality(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="amount-section mt-7">
          <h1>Amount</h1>
          <input
            type="number"
            className="amount-text rounded-2xl p-3 font-normal w-[459px]"
            min="1"
            max="4"
            value={amount}
            onChange={handleAmountChange}
          />
          {showAlert && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 p-4 rounded relative mt-4 w-[459px]"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <p className="font-normal text-base">
                The minimum amount is 1 and maximum amount is 4.
              </p>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={closeAlert}
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
        </div>
        <button
          className="flex items-center mt-7 bg-blue-600 text-white w-40 h-16 px-4 py-2 rounded-3xl font-normal hover:bg-blue-800 focus:ring active:bg-blue-950"
          onClick={generateImage}
        >
          <IoIosSettings className="mr-1" />
          Generate
        </button>
      </div>
      <div className="panel-right grow mt-7">
        <h1>Results</h1>
        <div className="generated-icons-result rounded-2xl p-3 bg-white w-[526px] h-[632px] flex flex-wrap gap-10">
          {results.map((url, index) => (
            <div key={index} className="image-container relative">
              <TfiDownload
                className="download-icon absolute top-0 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
                onClick={() => openInNewTab(url)}
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
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <p className="text-center text-red-500 font-bold mb-4">
              Insufficient Credits
            </p>
            <p className="text-center text-base">
              You do not have enough credits. Please buy more.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => setShowAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
