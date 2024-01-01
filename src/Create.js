import React,{useState} from 'react'

const  Create = ({message,setMessage}) => {
  let [input,setInput] = useState(""); 

  const submitButtonHandler = (e)=>{
    e.preventDefault();
    setMessage([...message,input]);
    setInput("");
  }

  const inputHandler = (e)=>{
    setInput(e.target.value);
  }

  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  )
}

export default Create
