import { useState } from 'react'

export default () =>{
    const [tasks, setTask] = useState([]);
    const [input, setinput] = useState(null);

    const HandlTask = (set) => {
        return {
            addTask(event){
                event.preventDefault()
                const value = input.target.value.trim()
                if(value.length > 2){
                    set(prevTasks => [...prevTasks, {id: Date.now(), data: value}])
                } 
            },
            deleteTask(id){
                set(prevTasks => prevTasks.filter(item => item.id !== id));
            },
            editTask(){

            },
            setinput
        }
    }

    
    return {
        store:tasks,
        handlTask:HandlTask(setTask)
    }
}