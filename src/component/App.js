import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <section className="todoapp">
                <Header />
                <Main />
                <Footer />
            </section>
        )
    }
}

export default App