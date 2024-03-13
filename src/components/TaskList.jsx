import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import CreateForm from "../forms/CreateForm";
import { useEffect, useState } from "react";
import DeleteForm from "../forms/DeleteForm";

export default function TaskList({ taskObj, update, setUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [delModal, setDelModal] = useState(false);

  return (
    <div className="bg-[#FEFAE0] my-4 p-5 rounded-xl flex items-center justify-between">
      <div className="">{taskObj.task}</div>
      <div className="flex text-xl text-title gap-2 cursor-pointer">
        <div onClick={() => setIsOpen(true)}>
          <FaEdit />
        </div>
        <Modal
          title={"Edit Task"}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          update={update}
          setUpdate={setUpdate}
        >
          <CreateForm
            onClose={() => setIsOpen(false)}
            taskObj={taskObj}
            update={update}
            setUpdate={setUpdate}
          />
        </Modal>

        <div onClick={() => setDelModal(true)}>
          <MdDelete />
        </div>
        <Modal
          title={"Delete Task"}
          open={delModal}
          onClose={() => setDelModal(false)}
          update={update}
          setUpdate={setUpdate}
        >
          <DeleteForm
            onClose={() => setDelModal(false)}
            taskObj={taskObj}
            update={update}
            setUpdate={setUpdate}
          />
        </Modal>
      </div>
    </div>
  );
}
