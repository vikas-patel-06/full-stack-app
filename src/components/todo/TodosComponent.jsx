import React, { Component } from 'react'

class TodosComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, description: 'Learn React', date: new Date(), done: false },
        {
          id: 2,
          description: 'Learn JPA',
          date: new Date(),
          done: false,
        },
        { id: 3, description: 'Learn Java', date: new Date(), done: false },
      ],
    }
  }
  render() {
    return (
      <div>
        <h1>List of Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Target Date</th>
                <th>Is Complete?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.date.toLocaleDateString()}</td>
                  <td>{todo.done.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TodosComponent
