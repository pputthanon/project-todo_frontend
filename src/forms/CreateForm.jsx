import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function CreateForm() {
  return (
    <>
      <form>
        <div>
          <Input name={"task"} placeholder={"Task"}></Input>
        </div>
        <div className="w-full mt-2">
          <select className="block w-full border rounded-md outline-none px-2 py-2 text-base ">
            <option value="not_started">not_started</option>
            <option value="in_progress">in_progress</option>
            <option value="done">done</option>
          </select>
        </div>
        <div>
          <div className="mt-2 flex justify-center">
            <Button
              type={"submit"}
              text={"Add"}
              className="bg-[#e9edc9] hover:bg-[#CCD5AE] "
            ></Button>
          </div>
          <div className="mt-2 flex justify-center">
            <Button
              type={"button"}
              text={"Cancel"}
              className="bg-[#e9edc9] hover:bg-[#CCD5AE] "
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
}
