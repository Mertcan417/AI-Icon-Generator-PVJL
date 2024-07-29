import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./common/Logo";
import AuthButton from "./AuthButton";
import { handleLogin, isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/router";

const Header = ({ scrollToFeatures, scrollToPricing }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 772);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    const authenticated = await isAuthenticated();
    if (authenticated) {
      router.push("/generate");
    } else {
      await handleLogin();
    }
  };

  const renderLinks = () => (
    <div className="ml-10">
      <Link
        href="/generate"
        onClick={handleClick}
        className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4"
      >
        Generate
      </Link>
      <a
        onClick={scrollToFeatures}
        className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4"
      >
        Features
      </a>
      <a
        onClick={scrollToPricing}
        className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4"
      >
        Price
      </a>
      <Link
      href={"/chat"}
        className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4"
      >
        Chat
      </Link>
    </div>
  );

  return (
    <header className="p-10 bg-white">
      <nav className="flex justify-between items-center flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0 flex-wrap">
          <Link href="/">
            <Logo />
          </Link>
          {isMobile ? (
            <button
              className="ml-2 md:ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="text-2xl cursor-pointer" />
              ) : (
                <AiOutlineMenu className="text-2xl cursor-pointer" />
              )}
            </button>
          ) : (
            renderLinks()
          )}
        </div>
        {!isMobile && (
          <AuthButton
            style={
              "flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl"
            }
          ></AuthButton>
        )}
      </nav>
      {isMobile && isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4">
          {renderLinks()}
          <AuthButton
            style={
              "text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 flex items-center"
            }
          ></AuthButton>
        </div>
      )}
    </header>
  );
};

export default Header;
