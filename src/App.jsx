import { useDispatch, useSelector } from "react-redux";
import { Card } from "./components/card";
import { add } from "./redux/todo";
import React from "react";

function App() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const input = React.useRef(null);

  const submit = (e) => {
    e.preventDefault();

    dispatch(add({ id: Date.now(), name: input.current.value }));
    input.current.value = "";
  };

  return (
    <>
    <div className=" max-w-96 mx-auto mt-[30px]">
      <form className=" bg-white py-[50px] text-center rounded-[20px] mb-[30px]" onSubmit={submit}>
        <input className=" border-[2px] border-green-400 p-[5px]" ref={input} type="text" name="name" />
        <button className="bg-green-500 p-[10px] ml-2 rounded-[8px] text-white" type="submit">Submit</button>
      </form>
      <div className="bg-white rounded-[20px] text-center">
      {todoList.map((item) => (
        <Card  key={item.id} {...item} />
      ))}
      </div>
      </div>
    </>
  );
}

export default App;
