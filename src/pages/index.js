import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Transition } from "@headlessui/react"; // Import Headless UI for transitions

export default function Home() {
  const [credits, setCredits] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false); // State to control welcome section animation

  useEffect(() => {
    // Load credits from local storage on component mount
    const savedCredits = localStorage.getItem("credits");
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
    // Trigger welcome section animation after delay
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  }, []);

  // Refs for scroll targets
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  // Scroll to Features section
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to Pricing Plans section
  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="p-5">
        <Header
          scrollToFeatures={scrollToFeatures}
          scrollToPricing={scrollToPricing}
        />
        <main className="mt-12">
          {/* Welcome Section */}
          <section
            className={`text-center ${
              showWelcome
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } transition-opacity duration-1000 ease-in-out transform`}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-medium mb-4">
                Welcome to <span className="text-blue-600">AI</span>conCraft
              </h1>
              <p className="text-lg mb-8">
                Generate custom icons instantly with IconCraft.{" "}
                <strong>Simply click</strong> to bring your ideas to life with
                AI precision. Perfect for designers and enthusiasts alike,
                IconCraft makes icon creation <strong>effortless</strong> and{" "}
                <strong>fun</strong>. Start clicking and watch your creativity
                unfold!
              </p>
            </div>
          </section>

          {/* Video Section */}
          <section className="text-center mt-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-medium mb-8">
                Generate Icons with one click!
              </h2>
              <div className="w-full">
                <video
                  className="w-full h-auto rounded-xl shadow-md mx-auto"
                  controls
                  autoPlay
                  loop
                >
                  <source src="/video4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="text-center mt-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-medium mb-8" ref={featuresRef}>Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Feature Cards */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/clock.png"
                    alt="Clock icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    There is <strong>no need</strong> for hiring a{" "}
                    <strong>UX designer</strong>. With one click on the button,
                    your icon will be complete.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/thumb.png"
                    alt="Thumb icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    The generated icons are of{" "}
                    <strong>excellent quality</strong>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/blitz.png"
                    alt="Blitz icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    Icons generated <strong>quickly</strong>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/cash.png"
                    alt="Cash icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    The application offers <strong>competitive pricing</strong>{" "}
                    for credits required to generate{" "}
                    <strong>high-quality images</strong>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/service.png"
                    alt="Service icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    Users have several <strong>options</strong> when generating
                    icons, including choices for{" "}
                    <strong>resolution, style</strong>, and the{" "}
                    <strong>quantity</strong> of images.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/extra.png"
                    alt="Extra icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    In addition to icon generation, the application offers
                    features to <strong>edit</strong> existing images.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/clicking.png"
                    alt="Clicking icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    The application provides a <strong>user-friendly</strong>{" "}
                    experience and is
                    <strong>easy</strong> to navigate, devoid of complexity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/save.png"
                    alt="Save icon"
                    className="w-20 h-20 mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    All generated icons are automatically <strong>saved</strong>{" "}
                    and accessible through a clear list.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Plans Section */}
          <section className="mt-32 mb-24">
            <div className="mx-auto">
              <h2 className="text-4xl text-center font-medium mb-8" ref={pricingRef}>
                Suitable pricing plans
              </h2>
              <div className="flex flex-wrap justify-center gap-4 sm:flex-no-wrap">
                {/* Free Plan Card */}
                <div className="bg-gradient-to-r text-white from-gray-400 to-blue-500 shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Starter</h2>
                  </div>
                  <div className="text-3xl font-bold mb-4">€10</div>
                  <p className="mb-4">Generate up to 10 images</p>
                  <ul className="mb-6">
                    <li className="mb-2">10 credits</li>
                  </ul>
                  <button className="text-center py-2 px-4 rounded-lg bg-white text-blue-500 hover:bg-gray-200">
                    Buy For €10
                  </button>
                </div>

                {/* Starter Plan Card */}
                <div className="bg-gradient-to-r text-white from-yellow-400 to-orange-500 shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Pro</h2>
                  </div>
                  <div className="text-3xl font-bold mb-4">€15</div>
                  <p className="mb-4">Generate up to 50 images</p>
                  <ul className="mb-6">
                    <li className="mb-2">50 credits</li>
                  </ul>
                  <button className="text-center py-2 px-4 rounded-lg bg-white text-yellow-500 hover:bg-gray-200">
                    Buy For €15
                  </button>
                </div>

                {/* Enterprise Plan Card */}
                <div className="bg-gradient-to-r text-white from-purple-500 via-pink-500 to-red-500 shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Enterprise</h2>
                  </div>
                  <div className="text-3xl font-bold mb-4">€20</div>
                  <p className="mb-4">Generate up to 100 images</p>
                  <ul className="mb-6">
                    <li className="mb-2">100 credits</li>
                  </ul>
                  <button className="text-center py-2 px-4 rounded-lg bg-white text-purple-500 hover:bg-gray-200">
                    Buy For €20
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
