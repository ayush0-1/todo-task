import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setListUpdated, setUpId } from "../utils/todoSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { setId } from "../utils/authSlice";

const TodoForm = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const userId = useSelector((store) => store.auth.id);
  const ip = useSelector((store) => store.todo.inputs);
  const upId = useSelector((store) => store.todo.upId);

  useEffect(() => {
    if (upId !== "") {
      setInputs(ip);
    }
  }, [upId]);

  useEffect(() => {
    //  id = sessionStorage.getItem('id');
    setInputs({ title: "", body: "" });
    let gid = "";
    if (isLoggedIn) {
      gid = sessionStorage.getItem("id");
    }
    // setId(gid)
    dispatch(setId(gid));
  }, [isLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    // console.log(inputs)
  };

  const handleAdd = async () => {
    if (inputs.title === "" || inputs.body === "") {
      toast.error("Title or Body can not be empty");
    } else {
      if (userId !== "") {
        await axios
          .post(`${window.location.origin}/api/v2/addTask`, {
            ...inputs,
            id: userId,
          })
          .then((res) => {
            console.log(res);
          });

        dispatch(setListUpdated());
        setInputs({ title: "", body: "" });
        toast.success("Task has been added");
      } else {
        dispatch(addTodo(inputs));
        setInputs({ title: "", body: "" });
        toast.success("Task has been added");
        toast.error("Please Sign In to save your Todos");
      }
    }
  };

  const handleUpdate = async () => {
    await axios
      .put(`${window.location.origin}/api/v2/updateTask/${upId}`, inputs)
      .then((res) => {
        dispatch(setUpId(""));
        setInputs({ title: "", body: "" });
        dispatch(setListUpdated());
        toast.success(res.data.message);

        console.log(res);
      });
  };

  return (
    <div className="container mx-auto  px-5 py-2 flex flex-wrap  justify-center items-center text-gray-600 body-font ">
      <div className="w-full md:w-1/2 justify-center bg-gray-100 rounded-lg p-8 flex flex-col  mt-4 shadow-lg ">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
          />
        </div>
        <div className="relative mb-4">
          <textarea
            type="text"
            placeholder="Body"
            name="body"
            value={inputs.body}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        {upId !== "" ? (
          <button
            onClick={handleUpdate}
            className="text-white w-full md:w-1/4 bg-indigo-500 border-0 w-1/2 md:w-1/6 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="text-white bg-indigo-500 border-0 w-1/2 md:w-1/6 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
