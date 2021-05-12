import { useState } from 'react'

const Checkbox=()=>{
	const[emoji,setEmoji]=useState(true)
	const[displaypic,setDisplaypic]=useState("✔️")
	const chnageEmoji=()=>{
		setEmoji(!emoji)
		//console.log(setEmoji=!setEmoji)
		if(emoji)
		setDisplaypic("✔️")
		else
		setDisplaypic("❌")
	}
	
		return (
			<span role="img" aria-label="check mark" onClick={chnageEmoji}>{displaypic}</span>
		)
	
 
}
export default Checkbox