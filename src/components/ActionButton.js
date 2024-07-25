import Link from "next/link";

const ActionButton = ({ text, href, style, onClick }) => (
  <Link
    href={href}
    className={`flex items-center justify-center h-14 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl ${style}`}
    onClick={onClick}
  >
    {text}
  </Link>
);

export default ActionButton;
