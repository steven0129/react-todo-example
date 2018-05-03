import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" autofocus />
            </header>
        )
    }
}

export default Header