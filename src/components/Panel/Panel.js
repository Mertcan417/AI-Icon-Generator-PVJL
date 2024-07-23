import React, { useState } from "react";
import Input from "../common/Input";
import Results from "./Results";
import LoadingScreen from "../common/LoadingScreen";
import { useCredits } from "../hooks/useCredits";
import { IoIosSettings } from "react-icons/io";
import axios from "axios";

const Panel = () => {
  const { credits, setCredits, saveCredits } = useCredits();
  const [prompt, setPrompt] = useState("");
  const [amount, setAmount] = useState(1);
  const [results, setResults] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPromptAlert, setShowPromptAlert] = useState(false);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAmountChange = (value) => {
    if (value > 4 || value === 0) {
      setAlertMessage({
        title: "Not Enough Credits!",
        body: "You don't have enough credits to generate an image.",
      });
      setShowAlert(true);
      setAmount(2);
    } else {
      setShowAlert(false);
      setAmount(value);
    }
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const triggerImageGeneration = async () => {
    if (prompt.trim().length < 5) {
      setAlertMessage({
        title: "Too short!",
        body: "The prompt should be at least 5 characters long and not just spaces.",
      });
      setShowPromptAlert(true);
      return;
    }

    if (credits <= 0) {
      setAlertMessage({
        title: "Not Enough Credits!",
        body: "You don't have enough credits to generate an image.",
      });
      setShowAlert(true);
      return;
    }

    setIsLoading(true);

    try {
      let requestBody = {
        prompt: "an icon from " + prompt.trim(),
        samples: amount,
        guidance_scale: 80,
        quality: "HIGH",
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

        if (data.status === "completed") {
          const imageUrls = data.result.data.map((item) => item.asset_url);
          setResults((prevResults) => [...prevResults, ...imageUrls]);
          clearInterval(interval);
          setIsLoading(false);
        } else if (data.status === "failed") {
          clearInterval(interval);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error polling job status:", error);
      }
    }, 5000); // Poll every 5 seconds
  };

  return (
    <div className="rounded-3xl mt-6 mb-10 mx-auto flex flex-col lg:flex-row py-6 px-4 lg:px-10 font-bold flex-wrap bg-gray-100 text-xl shadow-lg max-w-6xl gap-10">
      {isLoading && <LoadingScreen />}
      {showAlert && (
        <Input
          type="alert"
          alertMessage={alertMessage}
          setShowAlert={setShowAlert}
        />
      )}
      <div className="input-section grow flex flex-col mt-7 custom:items-center custom:text-center gap-10">
        <Input
          type="textarea"
          label="Prompt"
          value={prompt}
          onChange={handlePromptChange}
          showAlert={showPromptAlert}
          alertMessage={{
            title: "Too short!",
            body: "The prompt should be at least 5 characters long and not just spaces.",
          }}
          setShowAlert={setShowPromptAlert}
          inputProps={{
            placeholder: "Type here to create an icon (min 5 characters)",
            required: true,
          }}
        />
        <Input
          type="file"
          label="Upload an Image (Optional)"
          onChange={handleFileUpload}
          inputProps={{ id: "large_size" }}
        />
        <Input
          type="number"
          label="Amount"
          value={amount}
          onChange={(e) => handleAmountChange(parseInt(e.target.value, 10))}
          showAlert={showAlert}
          alertMessage={alertMessage}
          setShowAlert={setShowAlert}
          inputProps={{
            min: "1",
            max: "2",
            ariaLabel: "Amount of icons to generate",
          }}
        />

        <button
          className="flex items-center mt-7 lg:w-40 h-16 px-4 py-2 rounded-3xl font-normal w-64 h-14 bg-blue-600 text-white rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={triggerImageGeneration}
          aria-label="Generate image"
        >
          <IoIosSettings className="mr-1" />
          Generate
        </button>
      </div>
      <div className="grow mt-7 flex flex-col custom:items-center">
        <Results results={results} />
      </div>
    </div>
  );
};

export default Panel;
