import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const List = () => {
  const array = useSelector((store) => store.todo.array);

  return (
    <div className="container px-5  py-5 mx-auto flex flex-wrap text-gray-600 body-font justify-center">
      {array?.map((item, index) => (
        <ListItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default List;
