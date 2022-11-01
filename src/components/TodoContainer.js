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
            completed: false
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

       delTodo = id => {
        console.log("deleted", id);
      };
  render() {
    return (
        <div>
        <Header />
        <TodoList
        todos={this.state.todos}
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}
        />
      </div>
    )
  }
}
export default TodoContainer