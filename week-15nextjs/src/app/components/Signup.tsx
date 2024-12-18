"use client";
import axios from "axios";
import React, { useState } from "react";

export function Signup() {
  const [email, setemail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (

      <div>
    

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-[300px] bg-white rounded-lg shadow ">
                {password}
            <div className="p-6 space-y-4  ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value)
                    }}
                   
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                   
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  "
                  />
                </div>

                <div className="w-full p-3 text-center rounded-xl bg-blue-400 hover:bg-blue-600 cursor-pointer">
                  <button
                    onClick={async() => {  
                     await axios.post("http://localhost:3000/api/user"),
                        {
                          email,
                          password
                        }
                    }}
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    
    </div>
  );
}
