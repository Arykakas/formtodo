import React from 'react'
import { ListDisplay } from './ListDisplay';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Items : [],
            todoNow : "",
            time : ''
        }
    }
    todoinput = (event) => {
        this.setState({ todoNow : event.target.value})
    }
    _submit = (e) => {
        const key = 'todoApp'+Date.now()
        if(this.state.todoNow !== "") {
            this.setState({
                Items : [...this.state.Items, {key : key, text : this.state.todoNow}],
                todoNow : "",
            })
        } 
        e.preventDefault()
    }
    _updateTodo = (id, text) => {
        console.log(text)
        console.log(id)
        let updatedItems = this.state.Items.map((item) => {
            if(item.key === id){
                item.text = text
            }
            return item;
        })
        this.setState({
            Items : updatedItems
        })
    }


    render () {
        return (
            <div className="TodoApp">
                <form onSubmit={this._submit}>
                    <div className="form-group">
                        <label htmlFor="TodoListBox">What are you up to, Today?</label>
                        <div className="input-group">
                        <input onChange={this.todoinput} type="text" className="form-control" id="TodoListBox" value={this.state.todoNow} ></input>
                        <button  type="submit" className="btn btn-info">Add</button>
                        </div>
                    </div>
                </form>
                <ListDisplay  saveValue={this._updateTodo}  state={this.state} />
            </div>
        )
    }
}
