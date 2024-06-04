// index.js
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Panel from "./components/Panel";
import styles from "./components/styles/index.module.css";
import { HiOutlineCreditCard } from "react-icons/hi";

export default function Home() {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    // Load credits from local storage on component mount
    const savedCredits = localStorage.getItem('credits');
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <h1 className="text-5xl text-center font-bold">AI Icon Generator</h1>
        <div className="flex justify-center mt-10">
          <div className="flex items-center bg-yellow-500 text-white w-54 h-14 px-4 py-2 rounded-3xl hover:bg-yellow-600" style={{fontSize:'20px'}}>
            <HiOutlineCreditCard className="mr-1"/>
            {credits} credit(s)
          </div>
        </div>
        <Panel setCredits={setCredits} credits={credits} />
      </main>
    </div>
  );
}
