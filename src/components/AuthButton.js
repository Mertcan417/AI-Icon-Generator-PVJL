import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function AuthButton({ style }) {
  const { data: session } = useSession();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  if (session) {
    return (
      <div className="relative right-20">
        <img
          src={session.user.image}
          alt="User Avatar"
          className="rounded-full w-12 h-12 cursor-pointer"
          onClick={toggleUserInfo}
        />
        {showUserInfo && (
          <div className="absolute top-18 right-0 bg-white p-4 rounded-lg shadow-md">
            <h6 className="text-sm text-ellipsis">Signed in as {session.user.email}</h6>
            <button
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800 focus:ring focus:ring-blue-300 active:bg-blue-950 text-xl"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </>
  );
}
