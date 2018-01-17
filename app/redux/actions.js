export let ADD_TODO = "ADD_TODO";
export let DEL_TODO = "DEL_TODO";
export let SEARCH_TODO = "SEARCH_TODO";
export let TOGGOLE_TODO = "TOGGOLE_TODO";
export let SET_FILTER = "SET_FILTER";
export let SHOW_STYLE = {
	SHOW_ALL:'SHOW_ALL',
	SHOW_ACTIVE:'SHOW_ACTIVE',
	SHOW_COMPLETED:'SHOW_COMPLETED'
}


export function addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}

export function delTodo(index){
    return {
        type:DEL_TODO,
        index
    }
}

export function searchTodo(textChip){
    return {
        type:SEARCH_TODO,
        textChip
    }
}

export function toggleTodo(index){
    return {
    	type:TOGGOLE_TODO,
    	index
    }
}

export function setFilter(filter){
    return {
    	type:SET_FILTER,
    	filter
    }
}