import React, {useState} from 'react'


const AddTodoForm = ({addNewTodo}) => {

const[addTodo, setAddTodo] = useState ('..')
const  handleTodo = (e) => {
    e.preventDefault()
    addNewTodo (addTodo)

}

    return (
        <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajouter Todo</label>
                    <input className="form-control" value={addTodo} type="text" onChange={(e)=>setAddTodo(e.target.value)}/>
                    <input className="btn btn-success mt-2" type="submit" />
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm
