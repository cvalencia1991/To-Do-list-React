import React from "react";
import styles from "./todoItem.module.css"

export default class TodoItem extends React.Component{

  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
    render(){
        const { completed, id, title } = this.props.todo
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }

          let viewMode = {}
          let editMode = {}
          if (this.state.editing) {
          viewMode.display = "none"
          } else {
           editMode.display = "none"
          }
        return <li className={styles.item}>
             <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}/>
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                    <span style={this.props.todo.completed ? completedStyle : null}>
                    {title}
                    </span>
            </div>
            <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={title}
            onChange={e => {
              console.log(e.target.value, id)
            }}
            />
                </li>

            }

}