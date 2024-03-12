import Button from "../components/Button";
import axios from "../config/axios";

export default function DeleteForm({ onClose, taskObj }) {
  const deleteTask = async () => {
    axios.delete(`/user/delete/${taskObj.id}`);
  };

  return (
    <div className="">
      <div className=" flex justify-center my-8">
        Do you want to delete this task?
      </div>
      <div className="flex">
        <div className="w-full flex justify-center ">
          <Button
            type={"submit"}
            text={"Delete"}
            className="bg-[#e9edc9] hover:bg-[#ffdc83] w-36 flex justify-center"
            onClick={() => deleteTask(taskObj.id)}
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
    </div>
  );
}
