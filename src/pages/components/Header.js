import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import AIBrain from './AIBrain';

export default function Header({scrollToFeatures, scrollToPricing}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className="p-4 bg-white">
      <nav className="flex justify-between items-center flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0 flex-wrap">
          <AIBrain />
          {!isAuthPage && !isMobile && (
            <>
              <a href="#generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Generate</a>
              <a href="#features" onClick={()=>scrollToFeatures()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Features</a>
              <a href="#price" onClick={()=>scrollToPricing()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 md:ml-4">Price</a>
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
          <Link href="/login" className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl">
            <span>Sign In</span>
          </Link>
        )}
      </nav>
      {isMobile && isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4">
          {!isAuthPage && (
            <>
              <a href="#generate" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Generate</a>
              <a href="#features" onClick={()=>scrollToFeatures()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Features</a>
              <a href="#price" onClick={()=>scrollToPricing()} className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2">Price</a>
              <Link href="/login" className="text-xl font-medium cursor-pointer hover:text-blue-600 ml-2 flex items-center">
                <span>Sign In</span>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
