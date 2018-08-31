import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	submitButton: {
		//   margin: theme.spacing.unit,
		marginLeft: 20
	},
	textField: {
		marginLeft: theme.spacing.unit * 8,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	setMargin: {
		marginTop: 20
	}

});


class Todos extends Component {
	state = {
		selectedTodo: this.props.selectedTodo,
		ivalue: false
	}
	handleChange = (e) => {

		this.setState({
			selectedTodo: e.target.value
		})
	}

	componentWillReceiveProps(next) {
		this.setState({ selectedTodo: next.selectedTodo })
	}

	render() {

		const { classes, selectedTodo, todos, deleteTodo, handleEdit, isEdit, handleUpdate } = this.props;
		const todosList = todos.map((todo, i) => {
			return isEdit ? (
				<div key={i}>
					<div>{todo.todo}</div>
					<Button className={classes.submitButton} variant="contained" onClick={() => { handleEdit(todo.todo, i), this.setState({ ivalue: i }) }}>Edit</Button>
					<Button className={classes.submitButton} variant="contained" onClick={() => { deleteTodo(todo.id) }} color="secondary" >Delete</Button>
				</div>
			) : (
					this.state.ivalue === i ?
						<div>
							<TextField id="todo" value={this.state.selectedTodo} label="Update Todo" onChange={this.handleChange} className={classes.textField} margin="normal" />
							<Button className={classes.submitButton} variant="contained" onClick={() => { handleUpdate(this.state.selectedTodo, todo.id) }}>Update</Button>
						</div> : ''
				)
		})

		return (
			<div>
				<div>{todosList}</div>
			</div>
		)
	}

}
export default withStyles(styles)(Todos);
