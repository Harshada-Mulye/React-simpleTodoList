import { useState } from 'react'
const CheckboxProp=({emoji})=>{
	const[index,setIndex]=useState(0)
	const chnageEmoji=()=>{
		//setEmoji(...emoji,{emoji})
		if(index<emoji.length)
		{
		setIndex(index+1,console.log(index,emoji.length))
		}
		else
		{
	  
		setIndex(index=0,console.log("hi"));
		}
	}
	return(
          <div>
			 <span role="img" aria-label="check mark" onClick={chnageEmoji}>{emoji[index]}</span>
		  </div>

	)
}

export default CheckboxProp