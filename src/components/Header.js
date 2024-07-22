import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./common/Logo";

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

  const isAuthPage = ["/login", "/signup"].includes(router.pathname);
  const renderLinks = () => (
    <>
      <Link href="/generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">
        Generate
      </Link>
      <a onClick={scrollToFeatures} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">
        Features
      </a>
      <a onClick={scrollToPricing} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">
        Price
      </a>
    </>
  );

  return (
    <header className="p-4 bg-white">
      <nav className="flex justify-between items-center flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0 flex-wrap">
          <Link href="/">
            <Logo />
          </Link>
          {!isAuthPage && (isMobile ? (
            <button
              className="ml-2 md:ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <AiOutlineClose className="text-2xl cursor-pointer" /> : <AiOutlineMenu className="text-2xl cursor-pointer" />}
            </button>
          ) : (
            renderLinks()
          ))}
        </div>
        {!isAuthPage && !isMobile && (
          <Link
            href="/login"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl"
          >
            Sign In
          </Link>
        )}
      </nav>
      {isMobile && isMenuOpen && !isAuthPage && (
        <div className="flex flex-col items-center mt-4 space-y-4">
          {renderLinks()}
          <Link href="/login" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 flex items-center">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
