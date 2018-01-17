import { SHOW_STYLE, addTodo, toggleTodo, setFilter, delTodo } from './redux/actions';
import { createStore } from 'redux';
import  todoApp  from './redux/reducers';
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import Root from './root';

let store = createStore(todoApp);


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

console.log(store.getState())

store.dispatch(addTodo("the first text xiaopf!the first text xiaopf!the first text xiaopf!the first text xiaopf!"));
store.dispatch(addTodo("hahaha redux is so easy!"));
store.dispatch(addTodo("yoyo ready go!"));
store.dispatch(addTodo("adsf go!"));









unsubscribe()

render(
    <Provider store={store}>
	    <Root></Root>
    </Provider>,
    document.getElementById('root')
)





