import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import { SHOW_STYLE, addTodo, toggleTodo, delTodo, setFilter } from './redux/actions';

import { connect } from 'react-redux';

class Root extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		const { dispatch, showTodos, showFilter } = this.props;
		
		return (
            <div>
               <Header
	               onAddText = { text => dispatch(addTodo(text))}
               ></Header>
               <Body
                   todos = {showTodos}
                   onToCompleted = { index => dispatch(toggleTodo(index)) }
                   onToDeleteTodo = { index => dispatch(delTodo(index)) }
               ></Body>
               <Footer
	               showStyle={showFilter}

	               onShowAll = {style => dispatch(setFilter(style))}
	               onShowActive = {style => dispatch(setFilter(style))}
	               onShowCopleted = {style => dispatch(setFilter(style))}
               ></Footer>
            </div>
		)
	}
}





function selectTodos(todos, filter) {
	switch (filter) {
	    case SHOW_STYLE.SHOW_ALL:
		    return todos;
	    break;
	    case SHOW_STYLE.SHOW_COMPLETED:
		    return todos.filter(todo => todo.completed);
	    break;
	    case SHOW_STYLE.SHOW_ACTIVE:
		    return todos.filter(todo => !todo.completed);
	    break;
	}
}

function select(state) {
  return {
    showTodos: selectTodos(state.todos, state.showStyle),
    showFilter: state.showStyle
  };
}

export default connect(select)(Root)