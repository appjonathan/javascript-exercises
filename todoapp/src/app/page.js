"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Navigation from '@/components/navigation'
import Button from "@/components/button"
import { useState, useEffect } from "react"


export default function Homepage() {
  const [myTodoName, setMyTodoName] = useState("")

  // query wenn wir was auslesen
  // mutation ist wenn wir unser state anpassen
  const [ myTodos, setMyTodos ] = useState([])

  const handleAddTodo = () => {
    setMyTodos([...myTodos, { id: myTodos.length + 1, description: myTodoName }])
    setMyTodoName("")
  }

  let testCss = {
    padding: "5px"
  }

  // 👇 this is an event handler
  const handleTodoInput = (event) => {
    const value = event.target.value
    setMyTodoName(value)
  }

  return (
    <div>
      <main>
        <h1 style={testCss}>Welcome to my homepage in Nextjs</h1>
        <br />
        <p>Here is my next js app</p>
        <br />
        {myTodoName}
        <br />
        <br />
        <input 
        value={myTodoName}
        onInput={handleTodoInput}
        style={{
          padding: "1rem",
          border: "1px solid #000",
          borderRadius: "5px",
          fontSize: "1.5rem"
        }} type="text" placeholder="Enter your todo here" />
        <button onClick={handleAddTodo}>Add todo</button>
        <br />
        <ul>
        { myTodos.map(todo => {
          return (
            <li key={todo.id}>{todo.description}</li>
          )
        }) }
        </ul>
        <br />
        {/* 
        <Button 
        onClick={handleAddTodo}
        text={"Todo hinzufügen"} 
        />
        */}
      </main>
    </div>
    
  )
}
