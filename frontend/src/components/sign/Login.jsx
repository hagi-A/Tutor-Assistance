import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaGoogle } from "react-icons/fa6";
import loginImage from "../../images/loginImage.jpg"

const Login = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, email, password);
  };

  return (
    <>
      {/* <nav className="flex justify-end  bg-opacity-20">
        {!user && (
          <div >
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </nav> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl  rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-2 md:p-14">
            <span class=" text-4xl font-light">Welcome back</span>
            <span class="font-light text-violet-300 mb-4">
              Welcom back! Please enter your details
            </span>

            <form onSubmit={handleSubmit}>
              <div className="py-2 mt-2">
                <label>
                  <span className="mb-2 text-md  font-light">User Name: </span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <label>
                  <span className="mb-2 text-md font-light">Email: </span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full p-2 border border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-4">
                <label>
                  <span className="mb-2 text-md font-light">Password:</span>
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full p-2 border  border-violet-400 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              {/* <div class="flex justify-between w-full py-4">
                <span class="font-bold text-md">Forgot password</span>
              </div> */}

              <button
                disabled={isLoading}
                className="w-full bg-black text-white p-2 rounded-lg mb-2 mt-2 hover:text-violet-400 hover:border hover:border-violet-400"
              >
                Login
              </button>
              {error && <div className="error">{error}</div>}
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white text-md p-2 rounded-lg mb-2 hover:bg-violet-400 hover:text-white">
                <FaGoogle className="w-6 h-6 inline mr-2" />
                Sign in with Google
              </button>
              <div class="text-center text-gray-400 mb-0">
                Dont'have an account?
                <Link to="/signup" className="font-bold text-black">Sign up</Link>
                {/* <span class="font-bold text-black">Sign up for free</span> */}
              </div>
            </form>
           {/* right side */}
        
          </div>
          <div class="relative">
          <img
            src={loginImage}
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          {/* <div
            class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span class="text-white text-xl"
              >We've been uesing Untitle to kick"<br />start every new project
              and can't <br />imagine working without it."
            </span>
          </div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
