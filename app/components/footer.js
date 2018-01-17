import React from 'react';
import './footer.less';

class Footer extends React.Component{
	constructor(){
		super();

		this.showAll = this.showAll.bind(this);
		this.showActive = this.showActive.bind(this);
		this.showCopleted = this.showCopleted.bind(this);
	}

    showAll(){
        this.props.onShowAll('SHOW_ALL');
    }
    showActive(){
        this.props.onShowActive('SHOW_ACTIVE');
    }
    showCopleted(){
        this.props.onShowCopleted('SHOW_COMPLETED');
    }

	render(){
		return (
			<div className='footer-component'>
				<button 
					className = {`${this.props.showStyle === 'SHOW_ALL' ? 'active' : ''}`} 
                    onClick = {this.showAll}
				>ALL</button>
				<button 
					className = {`${this.props.showStyle === 'SHOW_ACTIVE' ? 'active' : ''}`} 
                    onClick = {this.showActive}
				>ACTIVE</button>
				<button 
					className = {`${this.props.showStyle === 'SHOW_COMPLETED' ? 'active' : ''}`} 
                    onClick = {this.showCopleted}
				>COMPLETED</button>
			</div>
		)
	}
}

export default Footer;