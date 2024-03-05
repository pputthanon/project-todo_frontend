import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Modal from "../components/Modal";
import CreateForm from "../forms/CreateForm";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";

export default function Homepage() {
  // const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [allTask, setAllTask] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/homepage/${authUser.id}`)
  //     .then((res) => {
  //       setAllTask(res.data.getTaskByUserId);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-center h-screen">
        <div className="flex w-1/2 mt-10 flex-col">
          <div className="flex justify-between bg-blue-600 w-full h-16 items-center">
            <div className="ml-2">LOGO</div>
            <div className="flex justify-center items-center cursor-pointer">
              <div onClick={() => setIsOpen(true)} className="mx-2">
                Add
              </div>
              <Modal
                title={"Add Task"}
                open={isOpen}
                onClose={() => setIsOpen(false)}
              >
                <CreateForm />
              </Modal>
              <div className="mx-2 ">filter</div>
            </div>
          </div>
          <div className="">
            {allTask?.map((el) => (
              <div className="bg-[#FEFAE0] my-4 p-5 rounded-xl">
                <div className="bg-slate-600">{el.task}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
