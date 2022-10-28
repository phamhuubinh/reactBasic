import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        let currenListTodo = this.state.listTodos;
        currenListTodo.push(todo);
        this.setState({
            // listTodos: [...this.state.listTodos, todo]
            listTodos: currenListTodo
        })
        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currenTodos = this.state.listTodos;
        currenTodos = currenTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currenTodos
        })
        toast.success("Delete success!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        // save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((index => index.id === todo.id));

            // Update object's name property
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo success")
            return;
        }
        // edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos - this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0

        return (
            <div className="list-todo-container">
                <p>Simple TODO Apps with React.js</p>
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Color(ListTodo);