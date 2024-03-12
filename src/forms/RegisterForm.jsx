import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import Joi from "joi";
import Input from "../components/Input";
import Button from "../components/Button";

const registerSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }

    setError({});
    register(input);
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex justify-center w-1/5" onSubmit={handleSubmitForm}>
        <div className="w-full">
          <div className="text-6xl font-bold flex justify-center">Register</div>
          <div>
            <div className="my-5">
              <div className="m-1">Preferred Name</div>
              <div className="m-1">
                <Input
                  placeholder="Enter your preferred name..."
                  name="name"
                  value={input.name}
                  onChange={handleChangeInput}
                  hasError={error.name}
                />
              </div>
              <div className="m-1">Email</div>
              <div className="m-1">
                <Input
                  placeholder="Enter your email address..."
                  type={"email"}
                  name="email"
                  value={input.email}
                  onChange={handleChangeInput}
                  hasError={error.email}
                />
              </div>
              <div className="m-1">Password</div>
              <div className="m-1">
                <Input
                  placeholder="Password"
                  type={"password"}
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                  hasError={error.password}
                />
              </div>
              <div className="m-1">Confirm Password</div>
              <div className="m-1">
                <Input
                  placeholder="Confirm Password"
                  type={"password"}
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                  hasError={error.confirmPassword}
                />
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
