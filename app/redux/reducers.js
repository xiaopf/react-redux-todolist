import { DEL_TODO, ADD_TODO, TOGGOLE_TODO, SET_FILTER, SHOW_STYLE, addTodo, delTodo, toggleTodo, setFilter} from './actions';
import {combineReducers} from 'redux';

const initialState = {
    showStyle:SHOW_STYLE.SHOW_ALL,
    todos:[]
}


function todos(state=[],action){
    switch(action.type){

           case ADD_TODO:
   	        return Object.assign([],state,[

            	...state,
                {
	               	text:action.text,
	               	completed:false
                }
   		               
   	        ]);


       	    break;

           case DEL_TODO:

                    return state.filter((todo,index)=>{
                      if(index == action.index){
                        return false;
                      }else{
                        return true;
                      }
                    });

            break;

       	    case TOGGOLE_TODO:
       	        return  state.map((todo , index)=>{
       	                        if(index == action.index){
       	                        	return Object.assign({},todo,{
       	                                completed : !todo.completed
       	                        	})
       	                        }
       	                        return todo
       		        	})

           break;

           default:
               return state;
    }
}


function showStyle(state = SHOW_STYLE.SHOW_ALL,action){
	switch(action.type){

		case SET_FILTER:
            return action.filter
		break;

	    default:
	        return state;

	}
} 


const todoApp = combineReducers({
	showStyle,
	todos
})


export default todoApp;





