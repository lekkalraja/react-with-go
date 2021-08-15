import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Footer from './Footer'
import Content from './Content'
import Header from './Header'
import DisplayPosts from './DisplayPosts'

import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.handlePosts = this.handlePosts.bind(this)
    }

    handlePosts(posts) {
        this.setState({posts: posts})
    }

    render() {
        const author = {
            name : "Raja",
            year : "2021"
        }

        return(
            <div className="app">
                <Header title="My Awesome App" />
                <Content { ...author } handlePosts= {this.handlePosts}/>
                <DisplayPosts posts= {this.state.posts} />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))