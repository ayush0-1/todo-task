import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputs, setListUpdated, setUpId } from "../utils/todoSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ListItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const userId = useSelector((store) => store.auth.id);

  const handleDelete = async () => {
    if (isLoggedIn) {
      await axios
        .delete(`${window.location.origin}/api/v2/deleteTask/${item._id}`, {
          data: { id: userId },
        })
        .then((res) => {
          console.log(res);
          dispatch(setListUpdated());
          toast.success(res.data.message);
        });
    } else {
      toast.error("This functionality is only for Logged In users");
    }
  };

  const handleUpdate = async () => {
    if (isLoggedIn) {
      dispatch(setUpId(item._id));
      dispatch(setInputs({ title: item.title, body: item.body }));
    } else {
      toast.error("This functionality is only for Logged In users");
    }
  };

  return (
    <div class="flex border-2 mx-2 mb-3 rounded-lg bg-gray-100 border-gray-200 border-opacity-50 p-8 m-1 w-72 md:w-1/6  flex-col ">
      <div class="flex-grow">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          {item.title}
        </h2>
        <p class="leading-relaxed text-base">{item.body}</p>
      </div>
      <div className="flex flex-row justify-between">
        <button
          onClick={handleUpdate}
          className="inline-flex items-centertext-white bg-indigo-500 border-0 w-1/2 p-1 mt-2 mr-2 justify-center focus:outline-none hover:bg-indigo-600 rounded text-lg text-white   "
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="inline-flex items-centertext-white text-black border-0 w-1/2  p-1 mt-2 ml-2 justify-center focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg  text-base  "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
