import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const [credits, setCredits] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  }, []);

  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <Header
          scrollToFeatures={scrollToFeatures}
          scrollToPricing={scrollToPricing}
        />
        <main className="mt-12">
          <section
            className={`text-center ${
              showWelcome
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } transition-opacity duration-1000 ease-in-out transform`}
          >
            <div className="max-w-xl mx-auto">
              <h1 className="text-4xl font-medium mb-4">
                Welcome to <span className="text-blue-600">AI</span>conCraft
              </h1>
              <p className="text-xl mb-8">
                Generate custom icons instantly with IconCraft.<br></br>{" "}
                <strong>Simply click</strong> to bring your ideas to life with
                AI precision. Perfect for designers and enthusiasts alike,
                IconCraft makes icon creation <strong>effortless</strong> and{" "}
                <strong>fun</strong>. Start clicking and watch your creativity
                unfold!
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/generate"
                className="flex items-center justify-center h-14 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
              >
                Get Started!
              </Link>
            </div>
          </section>

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

          <section className="text-center mt-32 rounded-xl bg-gray-100 p-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-medium mb-8" ref={featuresRef}>
                Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-24">
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/clock.png"
                    alt="Clock icon"
                    className="mx-auto mb-4 rounded-t-lg"
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
                    className="mx-auto mb-4 rounded-t-lg"
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
                    className="mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    Icons generated <strong>quickly</strong>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/cash.png"
                    alt="Cash icon"
                    className="mx-auto mb-4 rounded-t-lg"
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
                    className="mx-auto mb-4 rounded-t-lg"
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
                    className="mx-auto mb-4 rounded-t-lg"
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
                    className="mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    The application provides a <strong>user-friendly</strong>{" "}
                    experience and is <strong>easy</strong> to navigate, devoid
                    of complexity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <img
                    src="/save.png"
                    alt="Save icon"
                    className="mx-auto mb-4 rounded-t-lg"
                  />
                  <p className="text-sm text-center">
                    All generated icons are automatically{" "}
                    <strong> saved</strong> and accessible through a clear list.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Link
                href="/generate"
                className="flex items-center justify-center w-64 h-14 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Generate Your Icon!
              </Link>
            </div>
          </section>

          <section className="mt-32 mb-48">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-4xl text-center font-medium mb-8"
                ref={pricingRef}
              >
                Icons designed with <span className="text-blue-600">AI</span>concraft
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-24">
                <div className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="/example-1.jpg"
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>
                <div className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="/example-2.jpg"
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>

                <div className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="/example-3.jpg"
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>

                <div className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="/example-1.jpg"
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>
                <div className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="/example-2.jpg"
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>

                <div className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src="/example-3.jpg"
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="h-50 bg-gray-100 p-10">
            <div className="mx-auto">
              <h2
                className="text-4xl text-center font-medium mb-8"
                ref={pricingRef}
              >
                Suitable pricing plans
              </h2>

              <div className="flex flex-wrap justify-center gap-20 sm:flex-no-wrap mt-24">
                <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Basic</h2>
                  </div>
                  <div className="text-3xl font-bold mb-4">€10</div>
                  <p className="mb-4">Generate up to 10 images</p>
                  <ul className="mb-6">
                    <li className="mb-2">10 credits</li>
                  </ul>
                  <button className="transition ease-in-out delay-50 text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-gray-700">
                    Buy For €10
                  </button>
                </div>

                <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Pro</h2>
                  </div>
                  <div className="text-3xl font-bold mb-4">€15</div>
                  <p className="mb-4">Generate up to 50 images</p>
                  <ul className="mb-6">
                    <li className="mb-2">50 credits</li>
                  </ul>
                  <button className="transition ease-in-out delay-50 text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-gray-700">
                    Buy For €15
                  </button>
                </div>

                <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 w-80 border-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">Ultimate</h2>
                  </div>
                  <div className="text-3xl font-bold mb-4">€20</div>
                  <p className="mb-4">Generate up to 100 images</p>
                  <ul className="mb-6">
                    <li className="mb-2">100 credits</li>
                  </ul>
                  <button className="transition ease-in-out delay-50 text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-gray-700">
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
