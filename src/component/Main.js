import React from 'react'
import './Main.css'

class Main extends React.Component {
    render() {
        return (
            <section className="main">
				<input className="toggle-all" type="checkbox" />
				<label for="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					<li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" checked />
							<label>Taste JavaScript</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" value="Create a TodoMVC template" />
					</li>
					<li>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>Buy a unicorn</label>
							<button classNasme="destroy"></button>
						</div>
						<input className="edit" value="Rule the web" />
					</li>
				</ul>
			</section>
        )
    }
}

export default Main