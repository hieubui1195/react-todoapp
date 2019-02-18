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
            todo: ''
        };
    }

    createNewToDoItem = () => {
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
  
  
    handleKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
              this.createNewToDoItem();
            }
        }
    };
  
    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };
  
  
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
          list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };

    render() {
        return (
            <div className="todo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="todo-header">React To Do</h1>
                <div className="todo-container">

                    <div className="todo-content">
                        {
                            this.state.list.map((item, key) => <ToDoItem
                                key={key}
                                item={item.todo}
                                deleteItem={this.deleteItem.bind(this, key)}
                            />)
                        }
                    </div>

                    <div>
                       <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <button className="todo-add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
