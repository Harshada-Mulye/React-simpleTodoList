import { useState } from 'react'
import AddTodo from './AddTodo'
import './TodoList.css'


const TodoList = () => {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'Study React', isDone: false },
		{ id: 2, title: 'Wash windows', isDone: true },
		{ id: 3, title: 'Study more', isDone: false }
	])
	const[filter,setFilter]=useState("all")
	//const[filteredTodos,setFilteredTodos]=useState([])
     let filteredTodos = []


	 if(filter==="completed")
	 {
	 filteredTodos=todoList.filter(todo=>todo.isDone===true)
	 }
	else if(filter==="uncompleted")
	 {
		filteredTodos=todoList.filter(todo=>todo.isDone===false)	 
	 }
	 else{
		filteredTodos=todoList
	 }
	


  



	const addTodoItem = title => {
		// todoList.push  <- fungerar inte i React
		setTodoList( [
			...todoList,
			{ id: todoList.length + 1, title, isDone: false }
		] )
	}

	const markAsDone = id => {
		// todoList[0].isDone = true  <- fungerar inte i React
		setTodoList(todoList.map(todoItem => {
			if( todoItem.id === id ) {
				return { ...todoItem, isDone: true }
			} else {
				return todoItem
			}
		}))
	}
	const deletetask=(id)=>{
		setTodoList(todoList.filter(el=>el.id!==id))
		  }

	// Higher order functions for arrays: forEach, map, filter, find...
	const jsxList = filteredTodos.map(todoItem => (
		<li key={todoItem.id} className={todoItem.isDone ? 'done' : ''}>
			{todoItem.title}
			{todoItem.isDone ? null :
				<button onClick={() => markAsDone(todoItem.id)}> Done </button>}
				<button onClick={() => deletetask(todoItem.id)}> Delete </button>
		</li>
	))

	return (
		<div className="todo-list">
			<ul>
				{jsxList}
			</ul>
			<AddTodo addTodoItem={addTodoItem} setFilter={setFilter} />
			
		</div>
	)
}

export default TodoList