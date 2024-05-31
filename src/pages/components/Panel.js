import { IoIosSettings } from "react-icons/io";

export default function Panel() {
  return (
    <div
      className="panel rounded-3xl mt-6 mx-32 flex py-6 px-10 font-bold flex-wrap" style={{backgroundColor:"#f2f2f2", fontSize:"20px"}}
    >
      <div className="panel-left grow flex flex-col mt-7">
        <div className="generate-icon-section">
          <h1>Generate Icon</h1>
          <textarea
            className="generate-icon-text rounded-2xl text-base font-normal p-3"
            placeholder="Type here to create an icon"
            style={{ width: "459px", height: "144px" }}
          ></textarea>
        </div>
        <div className="model-section mt-7">
          <h1>Model</h1>

          <div
            className="model-buttons bg-white rounded-3xl flex justify-center items-center"
            style={{ maxWidth: "459px", height: "144px" }}
          >
            <div className="flex gap-10">
              <button className="bg-blue-600 text-white w-32 h-16 px-4 py-2 rounded-3xl font-normal hover:bg-blue-800 focus:ring active:bg-blue-950" 
              style={{ maxWidth: "192px", maxHeight: "64px" }}>
                Dalle 2
              </button>
              <button className="bg-blue-600 text-white w-32 h-16 px-4 py-2 rounded-3xl font-normal hover:bg-blue-800 focus:ring active:bg-blue-950">
                Dalle 3
              </button>
            </div>
          </div>
        </div>

        <div className="amount-section mt-7">
          <h1>Amount</h1>
          <input type="text" className="amount-text rounded-2xl p-3" 
            style={{ width: "459px"}}
        
          value={2} />
        </div>
        <button className="flex items-center mt-7 bg-blue-600 text-white w-40 h-16 px-4 py-2 rounded-3xl font-normal hover:bg-blue-800 focus:ring active:bg-blue-950">
        <IoIosSettings className="mr-1"/>
        Generate</button>
      </div>

      <div className="panel-right grow mt-7">
        <h1>Results</h1>
        <div className="generated-icons-result rounded-2xl p-3 bg-white w-[526px] h-[632px]">
</div>

      </div>
    </div>
  );
}
