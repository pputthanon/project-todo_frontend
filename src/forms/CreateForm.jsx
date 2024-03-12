import { DatePicker } from "antd";
import React from "react";
import dayjs from "dayjs";
import Input from "../components/Input";
import Button from "../components/Button";

export default function CreateForm({ onClose }) {
  const dateFormat = "DD/MM/YYYY";
  const disabledDate = (current) => {
    // Can not select days before today
    return current < dayjs().endOf("day");
  };

  return (
    <>
      <form className="text-title">
        <div>
          <div className="">Task</div>
          <Input name={"task"} placeholder={"Task"}></Input>
        </div>
        <div className="flex justify-between mt-2 gap-3">
          <div className="w-full">
            <div>Status</div>
            <select className="block w-full border rounded-md outline-none px-2 py-2 text-base ">
              <option value="not_started">not_started</option>
              <option value="in_progress">in_progress</option>
              <option value="done">done</option>
            </select>
          </div>
          <div className="w-full">
            <div>Due date</div>
            <DatePicker
              disabledDate={disabledDate}
              defaultValue={dayjs(new Date())}
              format={dateFormat}
              className="px-2 py-[7px] text-sm w-full "
            />
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-full flex justify-center ">
            <Button
              type={"submit"}
              text={"Add"}
              className="bg-[#e9edc9] hover:bg-[#ffdc83] w-36 flex justify-center"
            ></Button>
          </div>
          <div className="w-full flex justify-center">
            <Button
              onClick={onClose}
              text={"Cancel"}
              className="bg-[#e9edc9] hover:bg-[#CCD5AE] w-36 flex justify-center"
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
}
