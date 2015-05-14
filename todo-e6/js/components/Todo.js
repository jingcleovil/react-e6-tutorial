import React from 'react/addons';
import TodoLists from './TodoLists';

class Todo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            items: [],
            todoValue: ''
        };
	}

	submitTodo(e) {
		e.preventDefault();

		let items = this.state.items;
		let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
		let todoValue = React.findDOMNode(this.refs.todoValue);

		if(!this.state.todoValue) {
			todoValue.focus();
			return;
		}

		items.push({id: id,name: this.state.todoValue});

		this.setState({items: items,todoValue: ''});

		todoValue.focus();
	}

	onChange(e) {
		this.setState({todoValue: e.target.value});
	}

	render() {

		let cx = React.addons.classSet;

		let classes = cx({
			'message': true,
			'message-important': this.props.isImportant,
			'message-read': this.props.isRead
		});

		return (
			<div>
				<h1 className={classes}>Todo App</h1>
				<form onSubmit={this.submitTodo.bind(this)}>
					<input onChange={this.onChange.bind(this)} ref="todoValue" type="text" value={this.state.todoValue}/>
					<button>POST</button>
				</form>
				<TodoLists items={this.state.items}/>
			</div>
		);
	}
}

export default Todo;