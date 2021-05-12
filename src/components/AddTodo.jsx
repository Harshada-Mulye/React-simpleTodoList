import { useState } from "react";

const AddTodo = ({ addTodoItem ,setFilter}) => {
  const [title, setTitle] = useState("");

  const statusHandler=(e)=>{
	console.log(e.target.value)
	setFilter(e.target.value)
}



  return (
    <div>
      <input
        type="text"
        placeholder="Thing I need to do"
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={() => addTodoItem(title)}> Add </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default AddTodo;
