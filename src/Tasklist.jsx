import React from 'react'

const tasks=['learn react','practice coding','build project']
const handleTasks = ()=>{
    console.log(tasks)
}

const handleClick =(task)=>{
    console.log(`you clicked on ${task}`)
}
const Tasklist = ()=> {
  return (
    <div>
        <h1>Task list</h1>
        <button onClick={handleTasks}>Get Tasks</button>
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index}>
                        {task}
                        <button onClick={()=>handleClick(task)}>Click me</button>
                        </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Tasklist