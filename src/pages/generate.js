// index.js
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Panel from "../components/Panel/Panel";
import { HiOutlineCreditCard } from "react-icons/hi";
import Footer from "../components/Footer";

export default function GeneratePage() {
  const [credits, setCredits] = useState(0);
  const [username, setUsername] = useState("John Doe");

  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
  }, []);

  return (
    <>
      <div className="p-5 mb-16">
        <Header isGeneratorPage={true} username={username} />
        <main>
          <h1 className="text-4xl font-medium mb-4 text-center">
            <span className="text-blue-600">AI</span>conCraft
          </h1>
          <div className="flex justify-center mt-10">
            <div
              className="flex items-center bg-yellow-500 text-white w-64 h-14 px-4 py-2 rounded-3xl hover:bg-yellow-600"
              style={{ fontSize: "20px" }}
            >
              <HiOutlineCreditCard className="mr-1" />
              {credits} credit(s)
            </div>
          </div>
          <Panel setCredits={setCredits} credits={credits} />
        </main>
      </div>
      <Footer />
    </>
  );
}
