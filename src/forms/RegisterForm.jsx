import { Link } from "react-router-dom";

import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function RegisterForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex justify-center w-1/5">
        <div className="w-full">
          <div className="text-6xl font-bold flex justify-center">Register</div>
          <div>
            <div className="my-5">
              <div className="m-1">Preferred Name</div>
              <div className="m-1">
                <Input placeholder="Enter your preferred name..." />
              </div>
              <div className="m-1">Email</div>
              <div className="m-1">
                <Input
                  placeholder="Enter your email address..."
                  type={"email"}
                />
              </div>
              <div className="m-1">Password</div>
              <div className="m-1">
                <Input placeholder="Password" type={"password"} />
              </div>
              <div className="m-1">Confirm Password</div>
              <div className="m-1">
                <Input placeholder="Confirm Password" type={"password"} />
              </div>
              <div className="flex justify-center my-5">
                <div className="flex justify-center w-full font-semibold">
                  <Button type={"submit"} text={"Register"} />
                </div>
              </div>
              <hr className="border border-neutral-400" />
              <Link to={`/login`}>
                <div className="flex justify-center my-5">
                  <div className="flex justify-center w-full font-semibold">
                    <Button
                      type={"button"}
                      text={"Login"}
                      className="bg-white hover:bg-[#f0b297]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
