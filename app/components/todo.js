import React from 'react';
import './todo.less';

class Todo extends React.Component{
	constructor(props){
		super(props)

		this.completed = this.completed.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);

	}

	completed(){
        this.props.onCompleted(this.props.index)
	}

	deleteTodo(e){
		e.stopPropagation();
        this.props.onDeleteTodo(this.props.index)
	}



	render(){
		return (
			    <li className={`body-item ${this.props.todo.completed ? "completed" : ""} ` }
			        onClick ={this.completed}
			    >
				    {this.props.index+1}. {this.props.todo.text}
				    <span className="showDel"
					    onClick={this.deleteTodo}

				    >X</span>
			    </li>
		)
	}
}

export default Todo;