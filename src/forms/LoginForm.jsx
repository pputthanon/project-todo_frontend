import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../hooks/use-auth";

export default function LoginForm() {
  const { login } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex justify-center w-1/5" onSubmit={handleSubmitForm}>
        <div className="w-full">
          <div className="text-6xl font-bold flex justify-center">Log in</div>
          <div>
            <div className="my-5">
              <div className="m-1">Email</div>
              <div className="m-1">
                <Input
                  name={"email"}
                  placeholder="Enter your email address..."
                  type={"email"}
                  value={input.email}
                  onChange={onChangeInput}
                />
              </div>
              <div className="m-1">Password</div>
              <div className="m-1">
                <Input
                  name={"password"}
                  placeholder="Password"
                  type={"password"}
                  value={input.password}
                  onChange={onChangeInput}
                />
              </div>

              <div className="flex justify-center my-5">
                <div className="flex justify-center w-full font-semibold">
                  <Button type={"submit"} text={"Log in"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
