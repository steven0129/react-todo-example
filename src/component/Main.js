import React from "react";
import "./Main.css";

const TodoItem = props => (
  <li className={props.completed ? props.completed : ""}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={props.completed} />
      <label>{props.content}</label>
      <button className="destroy" />
    </div>
    <input className="edit" value="Create a TodoMVC template" />
  </li>
);

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <TodoItem completed={true} content="Taste JavaScript" />
          <TodoItem completed={false} content="Buy a unicorn" />
        </ul>
      </section>
    );
  }
}

export default Main;
