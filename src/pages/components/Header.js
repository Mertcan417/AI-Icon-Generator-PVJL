// components/Header.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import AIBrain from './AIBrain';

export default function Header({ scrollToFeatures, scrollToPricing, isGeneratorPage, username }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for user menu
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 772);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';

  const handleSignOut = () => {
    // Logic for signing out the user
    console.log("User signed out");
    // Close the user menu after logout
    setIsUserMenuOpen(false);
  };

  return (
    <header className="p-4 bg-white relative">
      <nav className="flex justify-between items-center flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0 flex-wrap">
          <AIBrain />
          {!isAuthPage && !isMobile && (
            <>
              {isGeneratorPage ? (
                <>
                  <a href="#generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Generate</a>
                  <a href="#features" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Features</a>
                  <a href="#collection" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Collection</a>
                  <a href="#buy-credits" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Buy credits</a>
                </>
              ) : (
                <>
                  <a href="#generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Generate</a>
                  <a href="#features" onClick={() => scrollToFeatures()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Features</a>
                  <a href="#price" onClick={() => scrollToPricing()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Price</a>
                </>
              )}
            </>
          )}
          {!isAuthPage && isMobile && (
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
          )}
        </div>
        {!isAuthPage && !isMobile && (
          <div className="relative">
            <button
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} // Toggle user menu
            >
              <AiOutlineUser className="text-2xl" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <div className="px-4 py-2 border-b">{username}</div>
                <button
                  className="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-200"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
      {isMobile && isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4">
          {!isAuthPage && (
            <>
              {isGeneratorPage ? (
                <>
                  <a href="#generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Generate</a>
                  <a href="#features" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Features</a>
                  <a href="#collection" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Collection</a>
                  <a href="#buy-credits" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Buy credits</a>
                </>
              ) : (
                <>
                  <a href="#generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Generate</a>
                  <a href="#features" onClick={() => scrollToFeatures()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Features</a>
                  <a href="#price" onClick={() => scrollToPricing()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Price</a>
                </>
              )}
              <button
                className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 flex items-center"
                onClick={handleSignOut} // Logout functionality in mobile menu
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
