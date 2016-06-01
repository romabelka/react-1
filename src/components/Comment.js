import React, { PropTypes, Component } from 'react';

class Comment extends Component {
	state = {
	    isOpenComment: false
	}

	render(){
		const { comment } = this.props;
		const { isOpenComment } = this.state
		const body =  <section>{comment.text} </section>

		return (
			
			    <p onClick = {this.toggleOpen}>{comment.id}</p>

			
		)
	}
	toggleOpen = (ev) => {
	    this.setState({

	        isOpenComment: !this.state.isOpenComment
	    })
	}



}
export default Comment