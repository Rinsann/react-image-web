import React, { useEffect, useState } from 'react'
import "./styles/style.scss"

const Info = ({message,setMessage}) => {

  return (
    <div>
      {message.map((message,index) => (<p key={index}>学习内容是:{message}</p>))}
    </div>
  )
}

export default Info
