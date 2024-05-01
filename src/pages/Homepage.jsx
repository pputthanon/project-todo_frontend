import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { IoCloseCircleSharp } from "react-icons/io5";
import Header from "../layout/Header";
import Modal from "../components/Modal";
import CreateForm from "../forms/CreateForm";
import axios from "../config/axios";
import TaskList from "../components/TaskList";

export default function Homepage() {
  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [allTask, setAllTask] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(`/user/${authUser.id}`)
      .then((res) => {
        setAllTask(res.data.tasks);
      })
      .catch((err) => console.log(err));
  }, [update]);

  return (
    <div className="h-screen">
      <Header />

      {allTask.id ? (
        <div className="flex justify-center h-screen">
          <div className="flex w-1/2 mt-10 flex-col">
            <div className="flex justify-between bg-[#CCD5AE] w-full h-16 items-center rounded-lg px-3 text-title">
              <div className="ml-2">LOGO</div>
              <div className="flex justify-center items-center cursor-pointer">
                <div
                  onClick={() => setIsOpen(true)}
                  className="mx-2 font-semibold flex"
                >
                  Add
                </div>
                <Modal
                  title={"Add Task"}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  update={update}
                  setUpdate={setUpdate}
                >
                  <CreateForm
                    onClose={() => setIsOpen(false)}
                    update={update}
                    setUpdate={setUpdate}
                  />
                </Modal>
                {/* <div className="mx-2 ">filter</div> */}
              </div>
            </div>
            <div className="">
              {allTask?.map((el) => (
                <TaskList
                  key={el.id}
                  taskObj={el}
                  allTask={allTask}
                  update={update}
                  setUpdate={setUpdate}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen font-semibold text-2xl flex-col gap-10">
          <div className="text-9xl">
            <IoCloseCircleSharp />
          </div>
          <div> Looks like you don't have any tasks yet!</div>
        </div>
      )}
    </div>
  );
}
