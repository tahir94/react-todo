import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Todos from './Ninjas'
import AddTodo from './addNinjas'
let selectedTodo;
class App extends Component {

	state = {
		todos: [],
		isEdit: true
	}

	handleEdit = (todo, index) => {
		selectedTodo = todo;
		this.setState({
			isEdit: false
		})
	}
	handleUpdate = (updatedTodo, i) => {
		this.state.todos.map(ele => {
			if (ele.id === i) {
				ele.todo = updatedTodo;
			}
		})
		this.setState({
			isEdit: true,
		})
	}

	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos: todos
		})
	}

	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		})
		this.setState({
			todos: todos
		})
	}

	render() {
		return (
			<div className="App">
				<h1 className="header">Todo App</h1>
				<Todos todos={this.state.todos} handleUpdate={this.handleUpdate} selectedTodo={selectedTodo} isEdit={this.state.isEdit} handleEdit={this.handleEdit} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} isEdit={this.state.isEdit} />
			</div>
		)
	}
}

export default App
