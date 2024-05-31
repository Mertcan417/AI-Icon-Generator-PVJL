import Header from "./components/Header";
import Panel from "./components/Panel";
import styles from "./components/styles/index.module.css";
import { HiOutlineCreditCard } from "react-icons/hi";

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <h1 className="text-5xl text-center font-bold">AI Icon Generator</h1>
        <div className="flex justify-center mt-10">
          <div className="flex items-center bg-blue-600 text-white w-52 h-14 px-4 py-2 rounded-3xl" style={{fontSize:'20px'}}>
            <HiOutlineCreditCard className="mr-1"/>
            1 credit(s)
          </div>
        </div>
        <Panel />
      </main>
    </div>
  );
}
