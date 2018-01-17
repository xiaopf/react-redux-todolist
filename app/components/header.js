import React from 'react';
import './header.less';

class Header extends React.Component{
	constructor(props){
        super(props);

        this.addText = this.addText.bind(this);
        this.searchText = this.searchText.bind(this);
	}

    addText(){
    	this.props.onAddText(this.refs.addText.value);
    	this.refs.addText.value = "";
    }

    searchText(){

        this.props.onSearchText(this.refs.addText.value)
    }

	render(){
		return (
			<div className='header-component'>
			    <h2>TODO LISTS</h2>
				<input type="text" ref="addText" onKeyUp = {this.searchText}></input>
				<button
				   onClick = {this.addText}
				>Add todos</button>
			</div>
		)
	}
	
}

export default Header;