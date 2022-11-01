import React from "react"
import TodoList from "./Todoslist";
import Header from "./Header";


class TodoContainer extends React.Component {
 handleChange = (id) =>{
    this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        }
      })
 }

    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
  render() {
    return (
        <div>
            <Header />
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    )
  }
}
export default TodoContainer