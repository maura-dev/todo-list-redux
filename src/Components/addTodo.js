import React, {Component} from 'react'
export default class AddTodo extends Component{
	state={
		title:''
	}

	onChange=(e)=>{
		this.setState({
			title:e.target.value 
		});
	}

	onSubmit=(e)=>{
		e.preventDefault()
		this.props.addTodo(this.state.title)
		this.setState({title:''})
	}

	render(){
		return(
			<form style={{display:'flex'}} onSubmit={this.onSubmit}>
				<input 
				type="text" 
				name="title" 
				style={{flex:'10', 
				padding:'10px',
				borderLeft:'2px solid #fbdada',
				borderBottom:'2px solid #fbdada',
				outlineStyle:'none'}}
				placeholder="Add todo ..."
				value={this.state.title}
				onChange={this.onChange}/>

				<input 
				type="submit" 
				value="Submit"
				className="btn"
				style={{
					flex:'1',
					backgroundColor:'mistyrose',
					border:'2px solid #fbdada',
					color:'black',
					boxShadow:'0 0 2px 2px gray'}}/>
			</form>
			)
	}
}