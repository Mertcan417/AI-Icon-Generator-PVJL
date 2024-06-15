// index.js
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Panel from "./components/Panel";
import { HiOutlineCreditCard } from "react-icons/hi";

export default function Generator() {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    // Load credits from local storage on component mount
    const savedCredits = localStorage.getItem('credits');
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
  }, []);

  return (
    <div className="p-10 w-full h-full">
      <Header />
      <h1></h1>
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

      <section class="mt-10 py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
                <h2 class="font-manrope text-5xl text-center font-bold text-black mb-4">Suitable pricing plans</h2>
            </div>
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
                    <div class="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
                        <div class="border-b border-solid border-gray-200 pb-9 mb-9">
                            <div class="w-16 h-16 rounded-full bg-yellow-500 mx-auto flex justify-center items-center transition-all duration-300">
                            <HiOutlineCreditCard className="text-white font-bold text-3xl"/>

                        </div>
                        <h3 class="font-manrope text-2xl font-bold my-7 text-center text-blue-600">Free Plan</h3>
                        <div class="flex items-center justify-center">
                            <span class="font-manrope text-4xl font-medium text-gray-900">€0,00</span>
                            <span class="text-xl text-gray-500 ml-3">|&nbsp; Month</span>
                        </div>
                    </div>
                        <ul class="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                            <li class="flex items-center space-x-3.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                <span>2 credits</span>
                            </li>
                            <li class="flex items-center space-x-3.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                <span>Up to 2 images to generate</span>
                            </li>
                            
                        </ul>
                        <a href="javascript:;"  class="py-2.5 px-5 bg-blue-50 shadow-sm rounded-full transition-all duration-500 text-base text-blue-600 font-semibold text-center w-fit mx-auto group-hover:bg-blue-600 group-hover:text-white ">Purchase Plan</a>
                    </div> 
                    <div class="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
                        <div class="border-b border-solid border-gray-200 pb-9 mb-9">
                            <div class="w-16 h-16 rounded-full bg-yellow-500 mx-auto flex justify-center items-center transition-all duration-300">
                            <HiOutlineCreditCard className="text-white font-bold text-3xl"/>

                                    
                        </div>
                        <h3 class="font-manrope text-2xl font-bold my-7 text-center text-blue-600">Business Plan</h3>
                        <div class="flex items-center justify-center">
                            <span class="font-manrope text-4xl font-medium text-gray-900">€5</span>
                            <span class="text-xl text-gray-500 ml-3">|&nbsp; Month</span>
                        </div>
                    </div>
                        <ul class="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                            <li class="flex items-center space-x-3.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                <span>20 credits</span>
                            </li>
                            <li class="flex items-center space-x-3.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                <span>Generate 20 images</span>
                            </li>
                        </ul>
                        <a href="javascript:;"  class="py-2.5 px-5 bg-blue-50 shadow-sm rounded-full transition-all duration-500 text-base text-blue-600 font-semibold text-center w-fit mx-auto group-hover:bg-blue-600 group-hover:text-white ">Purchase Plan</a>
                    </div> 
                  <div class="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
                    <div class="border-b border-solid border-gray-200 pb-9 mb-9">
                        <div class="w-16 h-16 rounded-full bg-yellow-500 mx-auto flex justify-center items-center transition-all duration-300">
                        <HiOutlineCreditCard className="text-white font-bold text-3xl"/>
                                
                    </div>
                    <h3 class="font-manrope text-2xl font-bold my-7 text-center text-blue-600">Enterprise Plan</h3>
                    <div class="flex items-center justify-center">
                        <span class="font-manrope text-4xl font-medium text-gray-900">€10</span>
                        <span class="text-xl text-gray-500 ml-3">|&nbsp; Month</span>
                    </div>
                </div>
                    <ul class="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                        <li class="flex items-center space-x-3.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            <span>50 credits</span>
                        </li>
                        <li class="flex items-center space-x-3.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            <span>Generate 50 images</span>
                        </li>
                    </ul>
                    <a href="javascript:;"  class="py-2.5 px-5 bg-blue-50 shadow-sm rounded-full transition-all duration-500 text-base text-blue-600 font-semibold text-center w-fit mx-auto group-hover:bg-blue-600 group-hover:text-white ">Purchase Plan</a>
                </div> 
                </div>
        </div>
    </section>
                                            
      
    </div>
  );
}


