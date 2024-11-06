import React, { useState } from "react";
import axios from "axios";

let url = "https://e-learning-slfj.onrender.com/user/login/";
let currentUser = "";
let refresh = "";
let clr = true;

const LoginComp = () => {
  const [umail, setMail] = useState("");
  const [upass, setPass] = useState("");
  const [prompt, setPrompt] = useState("");
  const [btnTxt, setBtn] = useState("Login");

  // login button function with async
  let login = async (e) => {
    // prevent default execution
    e.preventDefault();

    // data for posting
    let userData = {
      email: umail,
      password: upass,
    };

    try {
      // loading button animation
      setBtn("...")

      // using axios
      const response = await axios.post(url, userData, {
        Headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      setPrompt("Login Successful.");
      clr = true;

      // using fetch
      // fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //     setPrompt("Login Failed!");
      //   })
      //   .then((data) => {
      //     setPrompt("Login Successful.");
      //     currentUser = "Bearer " + data.access;
      //     refresh = data.refresh;
      //   })

    } catch (err) {
      console.error(err.response.data);
      setPrompt("Login Failed");
      clr = false;
    } finally {
      setBtn("Login");
    }

    setMail("");
    setPass("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-[2em] font-semibold text-black mb-6">Login</h1>

      <div className="bg-white p-[4vw] w-full max-w-md border border-gray-300">
        <form className="space-y-4 flex flex-col items-center" onSubmit={login}>
          <p className={` ${clr ? "text-green-500" : "text-red-500"} `}>
            {prompt}
          </p>
          <div>
            <label
              htmlFor="mail"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              value={umail}
              onChange={(e) => setMail(e.target.value)}
              name="mail"
              id="mail"
              className="mt-1 block w-full border border-gray-300 p-2 focus:outline"
              placeholder="Email"
            />
          </div>

          <div>
            <label
              htmlFor="pass"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              value={upass}
              onChange={(e) => setPass(e.target.value)}
              name="pass"
              id="pass"
              className="mt-1 block w-full border border-gray-300 p-2 focus:outline"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="px-[2em] bg-black text-white font-semibold py-2 hover:bg-red-700"
          >
            {btnTxt}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
export { currentUser, refresh };
