import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: '',
    }

    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title) {
            // if(undefined/null/empty) => false
            toast.error("Missing title's Todo")
            return;
        }
        let todo = {
            id: 'todo'+Math.floor(Math.random() * 101),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: '',
        })
    }

    render () {
        let {title} = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(e) => this.handleOnChangeTitle(e)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;