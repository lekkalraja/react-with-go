import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <h1 className="badge bg-info"> { this.props.title }</h1>
        )
    }
}

export default Header