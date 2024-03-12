import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../hooks/use-auth";
import Header from "../layout/Header";
import Modal from "../components/Modal";
import CreateForm from "../forms/CreateForm";
import axios from "../config/axios";

export default function Homepage() {
  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    axios
      .get(`/user/${authUser.id}`)
      .then((res) => {
        setAllTask(res.data.tasks);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(allTask);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-center h-screen">
        <div className="flex w-1/2 mt-10 flex-col">
          <div className="flex justify-between bg-[#CCD5AE] w-full h-16 items-center rounded-lg font-semibold">
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
                <CreateForm onClose={() => setIsOpen(false)} />
              </Modal>
              <div className="mx-2 ">filter</div>
            </div>
          </div>
          <div className="">
            {allTask?.map((el) => (
              <div className="bg-[#FEFAE0] my-4 p-5 rounded-xl flex items-center justify-between">
                <div className="">{el.task}</div>
                <div className="flex text-xl text-title gap-2 cursor-pointer">
                  <div onClick={() => setIsOpen(true)}>
                    <FaEdit />
                  </div>
                  <Modal
                    title={"Add Task"}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    <CreateForm onClose={() => setIsOpen(false)} />
                  </Modal>
                  <div>
                    <MdDelete />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
