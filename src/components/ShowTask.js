export const ShowTask = ({taskList,setTaskList,task,setTask}) =>{
  
    const handleEdit = (id) =>{
        const selectedTask = taskList.find(todo => todo.id === id);
        console.log(selectedTask);
        setTask(selectedTask);

    }
    const handleDelete = (id) =>{
       const updatedTaskList= taskList.filter(todo => todo.id !== id);
       setTaskList(updatedTaskList)
    }
    return (
        <section className='showTask'>
                <p className="head">
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                    <button className="clearAll" onClick={() => setTaskList([])}>clear all</button>
                </p>
                <ul>
                    {taskList.map((todo) =>(
                        <li key={todo.id}>
                        <p>
                            <span className="name">  {todo.name}</span>
                            <span className="time"> {todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)}  className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                    </li>
                    ))}
                    
                </ul>

        </section>
       
    );
}