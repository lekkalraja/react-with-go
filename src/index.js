import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from './Footer'
import Content from './Content'
import Header from './Header'

import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        const author = {
            name : "Raja",
            year : "2021"
        }

        return(
            <div className="app">
                <Header title="My Awesome App" />
                <Content { ...author }/>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))