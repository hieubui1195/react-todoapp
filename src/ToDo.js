import React from 'react';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.svg';

class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    todo: 'fix bugs'
                },
                {
                    todo: 'write reports'
                }
            ],
            todo: '',
            buttonState: false
        };

        this.changeButtonState = this.changeButtonState.bind(this);
        this.createNewToDoItem = this.createNewToDoItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    changeButtonState() {
        this.setState({buttonState: !this.state.buttonState})
    }

    createNewToDoItem() {
        if (!this.state.todo) {
            alert("Please enter a todo!");

            return;
        }

        this.setState(({ list, todo }) => ({
            list: [
                ...list,
                {
                    todo
                }
            ],
            todo: ''
        }));
    };

    handleKeyPress(e) {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
              this.createNewToDoItem();
            }
        }
    };

    handleInput(e) {
        this.setState({
            todo: e.target.value
        });
    };

    deleteItem(indexToDelete) {
        this.setState(({ list }) => ({
          list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };

    render() {
        const {list, todo, buttonState} = this.state;

        return (
            <div className="todo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <div className="todo-header">
                    <h1>React To Do</h1>
                </div>
                <div className="todo-container">
                    <div className="button-state">
                        <h3>Change data example</h3>
                        <button onClick={this.changeButtonState}>
                            Button: {buttonState ? 'On' : 'Off'}
                        </button>
                    </div>
                    <div className="todo-content">
                        <h3>To Do content</h3>
                        {
                            list.map((item, key) => <ToDoItem
                                key={key}
                                item={item.todo}
                                deleteItem={this.deleteItem.bind(this, key)}
                            />)
                        }
                    </div>
                    <div>
                       <input type="text" value={todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <button className="todo-add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
