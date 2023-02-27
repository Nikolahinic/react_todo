import React from "react";



const Todo = ({ todo, index, markTodo, deleteTodo }) => {
    return (
        <div className="col-4">
            <div className="card text-center">
                <div className="card-header">
                    <h4>Todo : {index + 1}</h4>
                </div>
                <div className="card-body">
                    <h3 className={todo.done ? 'complete' : 'incoplete'}>{todo.msg}</h3>
                </div>
                <div className="card-footer">
                    <div onClick={() => { deleteTodo(index) }} className="btn btn-danger float-left">Delete</div>
                    <div onClick={() => { (markTodo(index)) }} className="btn btn-warning float-right">Mark</div>
                </div>
            </div>
        </div>
    )
}




export default Todo;