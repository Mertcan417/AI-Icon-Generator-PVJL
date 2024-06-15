// pages/login.js
import Link from 'next/link';
import AILogo from './components/AIBrain';
import Header from './components/Header';

const LoginPage = () => {
  return (
    <div className="w-full h-full p-10">
    <Header></Header>
      <h1 className="text-5xl text-center font-bold">Login</h1>
      <div className="flex justify-center mt-10">
        <div
          className="panel rounded-3xl mt-6 mx-32 flex py-6 px-10 font-normal flex-wrap justify-center"
          style={{ backgroundColor: "#f2f2f2", fontSize: "20px", height:"732px"}}
          >
          <form className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col items-center gap-5">


            <label for="username"> Username</label>
            <input type="text" id="username" name="username" className="text-center px-3 py-3 rounded-2xl font-normal" minLength={8}/>
            </div>

            <div className="flex flex-col items-center gap-3">

            <label for="password"> Password</label>
            <input type="password" id="password" name="password" className="text-center px-3 py-3 rounded-2xl font-normal" minLength={8}/>
            </div>
            <div className="flex flex-col items-center">

            <h6 style = {{fontSize:"14px"}}>
              Don't have an account?
              <span>
                <Link href="/signup" className="text-blue-600 hover:text-blue-800 focus:ring active:text-blue-950"> Sign up</Link>
              </span>
            </h6>
            </div>
            
            <button
              type="submit"
              className="flex items-center justify-center bg-blue-600 text-white w-40 h-12 px-2 py-2 rounded-3xl hover:bg-blue-800 focus:ring active:bg-blue-950"
              style={{ fontSize: "20px" }}
              >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
