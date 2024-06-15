
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-2">Legal</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Cookies Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-2">Social</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-gray-700">
          <p>&copy; 2024 Mertcan-IT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
