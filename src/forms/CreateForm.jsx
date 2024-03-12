import { DatePicker } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import Input from "../components/Input";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import axios from "../config/axios";

export default function CreateForm({ onClose, taskObj }) {
  const dateFormat = "DD/MM/YYYY";
  const disabledDate = (current) => {
    return current < dayjs().endOf("day");
  };

  const [input, setInput] = useState({
    task: "",
    dueDate: dayjs(new Date()),
    status: "in_progress",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (value) => {
    setInput({ ...input, status: value });
  };

  const handleDueDateChange = (value) => {
    setInput({ ...input, dueDate: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/create", input);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="text-title text-sm font-semibold"
        onSubmit={handleSubmitForm}
      >
        <div>
          <div>Task</div>
          <Input
            name={"task"}
            placeholder={"Task"}
            value={input.task}
            onChange={handleChangeInput}
          ></Input>
        </div>
        <div className="flex justify-between mt-2 gap-3">
          <div className="w-full">
            <div>Status</div>
            <select
              className="block w-full border rounded-md outline-none px-2 py-2 text-base "
              onChange={(e) => handleStatusChange(e.target.value)}
              value={input.status}
            >
              <option value="not_started">not_started</option>
              <option value="in_progress">in_progress</option>
              <option value="done">done</option>
            </select>
          </div>
          <div className="w-full">
            <div>Due date</div>
            <DatePicker
              disabledDate={disabledDate}
              format={dateFormat}
              className="px-2 py-[7px] text-sm w-full "
              onChange={handleDueDateChange}
              value={input.dueDate}
            />
          </div>
        </div>
        <div className="flex mt-5">
          {taskObj ? (
            <div className="w-full flex justify-center ">
              <Button
                type={"submit"}
                text={"Update"}
                className="bg-[#e9edc9] hover:bg-[#ffdc83] w-36 flex justify-center "
              ></Button>
            </div>
          ) : (
            <div className="w-full flex justify-center ">
              <Button
                type={"submit"}
                text={"Add"}
                className="bg-[#e9edc9] hover:bg-[#ffdc83] w-36 flex justify-center"
              ></Button>
            </div>
          )}
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
