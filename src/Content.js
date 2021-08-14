import React, { Component } from 'react';

class Content extends Component {
    render() {
        return(
            <h3> This Application was implemented by {this.props.name}, in { this.props.year } </h3>
        )
    }
}

export default Content