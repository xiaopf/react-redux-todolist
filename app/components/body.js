import React from 'react';
import './body.less';
import Todo from './todo';

class Body extends React.Component{
	constructor(props){
		super(props);

		this.toCompleted = this.toCompleted.bind(this);
		this.toDeleteTodo = this.toDeleteTodo.bind(this);
	}
    
	toCompleted(index){
        this.props.onToCompleted(index)

	}

	toDeleteTodo(index){
        this.props.onToDeleteTodo(index)
	}

	render(){
		return (
			<ul className="body-component">
                {
                	this.props.todos.map((todo,index) => 
                		(
                			<Todo
	                			todo = {todo}
	                			index = {index}
	                			key={index}
	                			show={todo.show}
	                			onCompleted = {this.toCompleted}
	                			onDeleteTodo = {this.toDeleteTodo}
                			></Todo>
                		)
                	 )
                }
			</ul>
		)
	}
}


export default Body;