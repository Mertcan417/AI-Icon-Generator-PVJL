import { useState, useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";
import PromptInput from "./PromptInput";
import FileUpload from "./FileUpload";
import AmountInput from "./AmountInput";
import Alerts from "./Alerts";
import Results from "./Results";
import { useCredits } from "./useCredits";

export default function Panel() {
  const [prompt, setPrompt] = useState("");
  const [amount, setAmount] = useState(1);
  const [results, setResults] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showPromptAlert, setShowPromptAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { credits, setCredits, saveCredits } = useCredits();

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const triggerImageGeneration = async () => {
    if (prompt.trim().length < 5) {
      setShowPromptAlert(true);
      return;
    }

    if (credits <= 0) {
      setShowAlert(true);
      return;
    }

    setIsLoading(true);

    try {
      let requestBody = {
        prompt: "a 4k high quality icon from " + prompt.trim(),
        samples: amount,
        guidance_scale: 100,
        quality: "LOW",
      };

      if (selectedFile) {
        requestBody.image = selectedFile;
      }

      const response = await axios.post("/api/triggerGeneration", requestBody);
      const { jobId } = response.data;

      setCredits((prevCredits) => prevCredits - 1);
      saveCredits(credits - 1);

      pollStatus(jobId);
    } catch (error) {
      console.error("Error triggering image generation:", error);
    }
  };

  const pollStatus = async (jobId) => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(`/api/checkStatus?jobId=${jobId}`);
        const data = response.data;

        if (data.status === 'completed') {
          const imageUrls = data.result.data.map((item) => item.asset_url);
          setResults((prevResults) => [...prevResults, ...imageUrls]);
          clearInterval(interval);
          setIsLoading(false);
        } else if (data.status === 'failed') {
          clearInterval(interval);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error polling job status:", error);
      }
    }, 5000); // Poll every 5 seconds
  };

  const handleAmountChange = (value) => {
    if (value > 4 || value === 0) {
      setShowAlert(true);
      setAmount(2);
    } else {
      setShowAlert(false);
      setAmount(value);
    }
  };

  return (
    <div className="panel rounded-3xl mt-6 mx-auto flex flex-col lg:flex-row py-6 px-4 lg:px-10 font-bold flex-wrap bg-gray-100 text-xl shadow-lg max-w-6xl">
      {isLoading && <LoadingScreen />}
      <div className="panel-left grow flex flex-col mt-7 custom:items-center custom:text-center">
        <PromptInput prompt={prompt} setPrompt={setPrompt} showPromptAlert={showPromptAlert} setShowPromptAlert={setShowPromptAlert} />
        <FileUpload handleFileUpload={handleFileUpload} />
        <AmountInput amount={amount} handleAmountChange={handleAmountChange} showAlert={showAlert} setShowAlert={setShowAlert} />
        <button
          className="flex items-center mt-7 bg-blue-600 text-white lg:w-40 h-16 px-4 py-2 rounded-3xl font-normal hover:bg-blue-800 focus:ring active:bg-blue-950 shadow-md"
          onClick={triggerImageGeneration}
          aria-label="Generate image"
        >
          <IoIosSettings className="mr-1" />
          Generate
        </button>
      </div>
      <div className="panel-right grow mt-7 flex flex-col custom:items-center">
        <Results results={results} />
      </div>
      <Alerts showAlert={showAlert} closeAlert={() => setShowAlert(false)} showPromptAlert={showPromptAlert} closePromptAlert={() => setShowPromptAlert(false)} />
    </div>
  );
}
