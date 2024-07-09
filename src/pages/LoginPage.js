import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setTimeout(() => {
          router.push("/generator");
        }, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5">
      <Header />
      <div className="flex justify-center">
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
      </div>
      <h1 className="text-5xl text-center font-bold mt-12">Sign In</h1>
      <div className="flex justify-center mt-10">
        <div
          className="panel rounded-3xl mt-6 mx-6 sm:mx-10 lg:mx-32 flex py-6 px-10 font-normal flex-wrap justify-center"
          style={{ backgroundColor: "#f2f2f2", fontSize: "20px" }}
        >
          <form
            className="flex flex-col justify-center items-center gap-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <label htmlFor="username" className="text-lg font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-center px-3 py-2 w-full rounded-2xl font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                minLength={8}
                required
              />
            </div>

            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              <label htmlFor="password" className="text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center px-3 py-2 w-full rounded-2xl font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                minLength={8}
                required
              />
            </div>

            <div className="flex items-center justify-between w-full max-w-md">
              <h6 style={{ fontSize: "14px" }}>
                Don't have an account?
                <span>
                  <Link
                    href="/signup"
                    className="text-blue-600 hover:text-blue-800 focus:ring active:text-blue-950"
                  >
                    {" "}
                    Sign up
                  </Link>
                </span>
              </h6>
            </div>

            <button
              type="submit"
              className={`flex items-center justify-center bg-blue-600 text-white w-full max-w-md h-12 px-2 py-2 rounded-3xl hover:bg-blue-800 focus:ring active:bg-blue-950 ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
              style={{ fontSize: "20px" }}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
