import { DatePicker } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "../config/axios";

export default function CreateForm({ onClose, taskObj, update, setUpdate }) {
  const dateFormat = "DD/MM/YYYY";
  const disabledDate = (current) => {
    return current < dayjs().endOf("day");
  };

  const taskDateTime = dayjs(taskObj?.createdAt).format("DD/MM/YYYY HH:mm");
  const taskDateTimeEdited = dayjs(taskObj?.editedAt).format(
    "DD/MM/YYYY HH:mm"
  );

  const [input, setInput] = useState({
    task: taskObj ? taskObj.task : "",
    dueDate: taskObj ? dayjs(taskObj.dueDate) : dayjs(new Date()),
    status: taskObj ? taskObj.status : "in_progress",
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
      if (taskObj?.id) {
        await axios.patch(`/user/update/${taskObj.id}`, input);
      } else {
        await axios.post("/user/create", input);
      }
      onClose();
      setUpdate(!update);
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
        {taskObj?.id ? (
          <div className="mt-2 flex justify-between">
            <div>Create At: {taskDateTime}</div>
            <div>Edited At: {taskDateTimeEdited}</div>
          </div>
        ) : null}
        <div className="flex mt-5">
          {taskObj?.id ? (
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
