import { MdOutlineLogin } from 'react-icons/md';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-end">
        <a href="#" className="flex items-center bg-blue-600 text-white w-32 h-16 px-2 py-2 rounded-3xl hover:bg-blue-800 focus:ring active:bg-blue-950" style={{ fontSize: '20px' }}>
          <MdOutlineLogin className="mr-4" />
          Login
        </a>
      </nav>
    </header>
  );
}
