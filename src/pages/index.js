import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionButton from "../components/ActionButton";
import FeatureCard from "../components/FeatureCard";
import PricingPlan from "../components/PricingPlan";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [credits, setCredits] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits));
    }
    setTimeout(() => setShowWelcome(true), 500);
  }, []);

  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  const featureCards = [
    { imgSrc: "/clock.png", altText: "Clock icon", text: "There is no need for hiring a UX designer. With one click on the button, your icon will be complete." },
    { imgSrc: "/thumb.png", altText: "Thumb icon", text: "The generated icons are of excellent quality." },
    { imgSrc: "/blitz.png", altText: "Blitz icon", text: "Icons generated quickly." },
    { imgSrc: "/cash.png", altText: "Cash icon", text: "The application offers competitive pricing for credits required to generate high-quality images." },
    { imgSrc: "/service.png", altText: "Service icon", text: "Users have several options when generating icons, including choices for resolution, style, and the quantity of images." },
    { imgSrc: "/extra.png", altText: "Extra icon", text: "In addition to icon generation, the application offers features to edit existing images." },
    { imgSrc: "/clicking.png", altText: "Clicking icon", text: "The application provides a user-friendly experience and is easy to navigate, devoid of complexity." },
    { imgSrc: "/save.png", altText: "Save icon", text: "All generated icons are automatically saved and accessible through a clear list." },
  ];

  const pricingPlans = [
    { title: "Basic", price: "€10", description: "Generate up to 10 images", credits: "10", buttonText: "Buy For €10" },
    { title: "Pro", price: "€15", description: "Generate up to 50 images", credits: "50", buttonText: "Buy For €15" },
    { title: "Ultimate", price: "€20", description: "Generate up to 100 images", credits: "100", buttonText: "Buy For €20" },
  ];

  return (
    <>
      <Header
        scrollToFeatures={() => scrollToRef(featuresRef)}
        scrollToPricing={() => scrollToRef(pricingRef)}
      />
      <main className="mt-12">
        <section
          className={`text-center ${
            showWelcome ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          } transition-opacity duration-1000 ease-in-out transform`}
        >
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-medium mb-4">
              Welcome to <span className="text-blue-600">AI</span>conCraft
            </h1>
            <p className="text-xl mb-8">
              Generate custom icons instantly with AIconCraft.<br /> <strong>Simply click</strong> to bring your ideas to life with AI precision. Perfect for designers and enthusiasts alike, AIconCraft makes icon creation <strong>effortless</strong> and <strong>fun</strong>. Start clicking and watch your creativity unfold!
            </p>
          </div>
          <div className="flex justify-center">
            <ActionButton text="Get Started!" href="/generate" />
          </div>
        </section>

        <section className="text-center mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-medium mb-8">Generate Icons with one click!</h2>
            <video className="w-full h-auto rounded-xl shadow-md mx-auto" controls autoPlay loop>
              <source src="/video4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="text-center mt-32 rounded-xl bg-gray-100 p-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-medium mb-8" ref={featuresRef}>Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-24">
              {featureCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  imgSrc={card.imgSrc}
                  altText={card.altText}
                  text={card.text}
                />
              ))}
            </div>
            <div className="flex justify-center mt-16">
              <ActionButton text="Generate Your Icon!" href="/generate" style="w-64" />
            </div>
          </div>
        </section>

        <section className="mt-32 mb-48">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl text-center font-medium mb-8" ref={pricingRef}>
              Icons designed with <span className="text-blue-600">AI</span> concraft
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-24">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-6 transition-transform duration-300 transform hover:scale-105">
                  <img
                    src={`/example-${(index % 3) + 1}.jpg`}
                    alt="example of icon designed with AIconcraft"
                    className="mx-auto mb-4 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 bg-gray-100">
          <Testimonials />
        </section>

        <section className="mt-20 mb-32 p-10">
          <div className="mx-auto">
            <h2 className="text-4xl text-center font-medium mb-8">Suitable pricing plans</h2>
            <div className="flex flex-wrap justify-center gap-20 sm:flex-no-wrap mt-24">
              {pricingPlans.map((plan, index) => (
                <PricingPlan
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  credits={plan.credits}
                  buttonText={plan.buttonText}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
