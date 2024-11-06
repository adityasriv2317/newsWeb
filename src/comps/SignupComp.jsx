import React, { useState } from "react";
import axios from "axios";

let url = "https://e-learning-slfj.onrender.com/user/signup/";
let clr = false;

const SignupComp = () => {
  const [username, setName] = useState("");
  const [umail, setMail] = useState("");
  const [uname, setUname] = useState("");
  const [upass, setPass] = useState("");
  const [prompt, setPrompt] = useState("");
  const [btnTxt, setBtn] = useState("Sign Up");

  let signUp = async (e) => {
    // prevent occurence on default values
    e.preventDefault();

    // data to be sent
    let userData = {
      fullname: username,
      email: umail,
      username: uname,
      password: upass,
    };

    try {
      // set loding button animation
      setBtn("...");

      const response = await axios.post(url, userData, {
        Headers: {
          "content-type": "application/json",
        },
      });

      console.log(response);
      setPrompt("Signup Successful.");
      clr = true;
    } catch (error) {
      console.log(error.response.data);
      clr = false;
      setPrompt("Signup Failed.");
    } finally {
      setBtn("Sign Up");
    }

    // reset all fields
    setName("");
    setMail("");
    setUname("");
    setPass("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-[2em] font-semibold text-black mb-6">Sign Up</h1>

      <div className="bg-white p-[4vw] w-full max-w-md border border-gray-300">
        <form
          className="space-y-4 flex flex-col items-center"
          onSubmit={signUp}
        >
          <p className={`${clr ? "text-green-600" : "text-red-600"}`}>
            {prompt}
          </p>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              className="mt-1 block w-full border border-gray-300 p-2 focus:outline "
              placeholder="Full Name"
            />
          </div>

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
              htmlFor="uname"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              name="uname"
              id="uname"
              className="mt-1 block w-full border border-gray-300 p-2 focus:outline"
              placeholder="Username"
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
            onClick={signUp}
            className="px-[2em] bg-black text-white font-semibold py-2 hover:bg-red-700"
          >
            {btnTxt}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupComp;
