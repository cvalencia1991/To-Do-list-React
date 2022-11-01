/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

state = {
  fName: '',
  lastName: '',
};

class InputTodo extends Component {
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
          this.props.addTodoProps(this.state.title);
          this.setState({
            title: '',
          });
        } else {
          alert('Please write item');
        }
      };

      render() {
        return (
          <form onSubmit={this.handleSubmit} className="formcontainer">
            <input
              type="text"
              className="input-text"
              placeholder="Add todo..."
              value={this.state.title}
              onChange={this.onChange}
              name="title"
            />
            <button type="button" className="input-submit">Submit</button>
          </form>
        );
      }
}
export default InputTodo;
