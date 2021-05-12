import { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList';
import Checkbox from './components/Checkbox';
import CheckboxArray from './components/CheckboxArray';
import CheckboxProp from './components/CheckboxProp';
import Tag from './components/Tag'
function App() {
	const[emoji,setEmoji]=useState([
		"✔️","❌","😂","🙈"
	])
	const[text,setText]=useState("")
	const textchange=()=>{
		if(othertext)
		setText("I am in")
		//console.log("hi")
	}
	const[othertext,setOtherText]=useState(true)

	
	
  return (
    <div className="App">
    

<TodoList/>
<Checkbox />
<CheckboxArray />
<CheckboxProp emoji={emoji}/>
<p>{text}</p>

<Tag  textchange={textchange} othertext={othertext} />
<Tag  textchange={textchange}  />
    </div>
  );
}

export default App;
