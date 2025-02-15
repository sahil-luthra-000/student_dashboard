import React, { useState } from "react";
import { useNavigate } from "react-router";
import PageLayout from "../Pages/PageLayout";
import { registerApi } from "../network/api";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerApi(data);
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/dashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response?.data?.message ?? e.message);
    }
  };

  return (
    <PageLayout>
      <main className="flex justify-center items-center min-h-screen  bg-gray-100">
        <section className="w-full max-w-md p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg m-4">
          <div className="p-6 rounded-xl bg-white ">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Create An Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg dark:text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full p-3 border rounded-lg shadow-sm dark:text-gray-300 focus:scale-105 transition-transform ease-in-out duration-300"
                  type="text"
                  value={data.name}
                  onChange={handleInput}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg dark:text-gray-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full p-3 border rounded-lg shadow-sm  dark:text-gray-300 focus:scale-105 transition-transform ease-in-out duration-300"
                  type="email"
                  value={data.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg dark:text-gray-400 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="w-full p-3 border rounded-lg shadow-sm  dark:text-gray-300 focus:scale-105 transition-transform ease-in-out duration-300"
                  type="password"
                  value={data.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button class="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 text-gray-900 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white">
                  Sign Up
                </span>
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="dark:text-gray-700">
                Already have an account?{" "}
                <button
                  onClick={handleNavigateToLogin}
                  className="text-blue-400 hover:underline"
                >
                  Log In
                </button>
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 mt-6">
              <button
                onClick={() => console.log("Sign up with Google")}
                className="p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button
                onClick={() => console.log("Sign up with LinkedIn")}
                className="p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                  alt="LinkedIn"
                />
              </button>
              <button
                onClick={() => console.log("Sign up with GitHub")}
                className="p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6 dark:invert"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="GitHub"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default SignUp;
