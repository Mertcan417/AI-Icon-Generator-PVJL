// index.js
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Panel from "../components/Panel/Panel";
import { HiOutlineCreditCard } from "react-icons/hi";
import Footer from "../components/Footer";

export default function GeneratePage() {
  const [credits, setCredits] = useState(2);
  const [username, setUsername] = useState("John Doe");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
  }, []);

  const handleCreditsChange = (newCredits) => {
    if (newCredits < credits) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
    setCredits(newCredits);
    localStorage.setItem("credits", newCredits);
  };

  return (
    <>
      <div className="mb-32">
        <Header isGeneratorPage={true} username={username} />
        <main>
          <h1 className="text-4xl font-medium mb-4 text-center">
            <span className="text-blue-600">AI</span>conCraft
          </h1>
          <div className="flex justify-center mt-10">
            <div
              className={`flex items-center justify-center w-48 h-12 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 focus:ring focus:ring-yellow-300 active:bg-yellow-800 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 ${isAnimating ? 'animate-credit' : ''}`}
              style={{ fontSize: "20px" }}
            >
              <HiOutlineCreditCard className="mr-1" />
              {credits} credit(s)
            </div>
          </div>
          <Panel setCredits={handleCreditsChange} credits={credits} />
        </main>
      </div>
      <Footer />
    </>
  );
}
