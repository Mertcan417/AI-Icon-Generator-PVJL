import { MdOutlineLogin } from 'react-icons/md';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-10" role="alert">
  <p class="font-bold">Be Warned</p>
  <p>If this is your first time, you can only generate 2 images for free. <br/>
  1 image generating = 1 credit.</p>
</div>
      <nav className="flex justify-end">
        <Link href="/login" className="flex items-center bg-blue-600 text-white w-32 h-16 px-2 py-2 rounded-3xl hover:bg-blue-800 focus:ring active:bg-blue-950" style={{ fontSize: '20px' }}>
          <MdOutlineLogin className="mr-4" />
          Login
        </Link>
      </nav>
    </header>
  );
}


