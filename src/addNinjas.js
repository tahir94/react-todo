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

class AddTodo extends Component {
	state = {
		todo: null,
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			todo: ''
		})
	}
	render() {
		const { classes, isEdit } = this.props;
		return isEdit ? (
			<div>
				<form onSubmit={this.handleSubmit}>
					<TextField id="todo" label="Add Todo" onChange={this.handleChange} className={classes.textField} value={this.state.todo} margin="normal" />
					<div>
						<Button disabled={!this.state.todo} type="submit" style={{ marginTop: 30, background: '#2196f3', color: 'white' }} variant="contained" >Submit</Button>
					</div>
				</form>
			</div>
		) : null
	}
}
export default withStyles(styles)(AddTodo);