import React, {useState} from 'react'
import AddTodoForm  from './AddTodoForm'
import { v1 as uuid } from 'uuid'

const Todo = () => {

    const [todos, settodos]= useState ([
        {id:1, todo: "Acheter du lait"},
        {id:2, todo:"Acheter du pain"},
        {id:3, todo:"Acheter du fromage"}
    ])

const [warning, setWarning] = useState(false);

    const myTodos= todos.map( e =>{
        return(
            <li className="list-group-item" key={e.id}>{e.todo}</li>
        )
    })

const addNewTodo= (newTodo) => {

if(newTodo !== ''){
    warning && setWarning(false)
    settodos([
        ...todos, {
            id: uuid(),
            todo:newTodo
        }
    ])
}else {
    setWarning(true)

}

    
}
const warningMsg =warning && <div class="alert alert-danger" role="alert">
  Vauillez entrez un Todo!!
</div>

    return (
        <div>
        {warningMsg}
            <h1 className="text-center"> {todos.length}TO-DO</h1>
            <div className="card card-body">
                <ul className="list-group">
                        {myTodos}
                </ul>
                <AddTodoForm addNewTodo={addNewTodo}/>
            </div>
        </div>
    )
}

export default Todo
