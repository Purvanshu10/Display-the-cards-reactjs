import React, { useEffect, useState } from "react";
import './App.css'

function App() {
 const [post, setpost] = useState([])
 const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    console.log(data);
    setpost(data)
 }
 useEffect(() => {
   fetchData()
 }, [])
 
  return (
    <>
    <div className="container">
        {post.map((post)=>{
          return <div className="cards" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div> 
        })}
    </div>
    </>
  );
};

export default App
