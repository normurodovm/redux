import React from "react";
import { useDispatch } from "react-redux";
import { editItem, deleteItem } from "../redux/todo";

export const Card = ({ name, id }) => {
  const dispatch = useDispatch();

  const changeName = () => {
    const newName = prompt("Enter new name:", name);
    if (newName) {
      dispatch(editItem({ id, name: newName }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="mb-7">
      <h1 className="font-semibold text-[19px] mb-2">{name}</h1>
      <p className="mb-2">{id}</p>
      <button className="p-2 bg-green-500 rounded-md text-white" onClick={handleDelete}>delete</button>
      <button className="p-2 bg-red-500 rounded-md text-white ml-[20px]" onClick={changeName}>edit</button>
    </div>
  );
};
