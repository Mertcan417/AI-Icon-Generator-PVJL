// pages/login.js
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-5xl text-center font-bold">Sign up</h1>
      <div className="flex justify-center mt-10">
        <div
          className="panel rounded-3xl mt-6 mx-32 flex py-6 px-10 font-normal flex-wrap w-full justify-center"
          style={{
            backgroundColor: "#f2f2f2",
            fontSize: "20px",
            height: "732px",
          }}
        >
          <form className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col items-center gap-5">
              <label for="username"> Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="text-center px-3 py-3 rounded-2xl font-normal"
                minLength={8}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <label for="password"> Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="text-center px-3 py-3 rounded-2xl font-normal"
                minLength={8}
              />
            </div>
            <div className="flex flex-col items-center">
              <h6 style={{ fontSize: "14px" }}>
                Already have an account?
                <span>
                    <Link
                    href="/login"
                    className="text-blue-600 hover:text-blue-800 focus:ring active:text-blue-950 cursor-pointer"
                  > Login
                  </Link>
                </span>
              </h6>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-blue-600 text-white w-40 h-12 px-2 py-2 rounded-3xl hover:bg-blue-800 focus:ring active:bg-blue-950"
              style={{ fontSize: "20px" }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
