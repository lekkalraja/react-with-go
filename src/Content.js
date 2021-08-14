import React, { Component, Fragment } from 'react';

class Content extends Component {

    constructor(props) {
        super(props)
        this.listRef = React.createRef()
    }

    fetchData = () => {
        // const list = document.getElementById("posts-list")
        const list = this.listRef.current
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonData => {
                jsonData.forEach(item => {
                    const li = document.createElement("li")
                    li.appendChild(document.createTextNode(item.title))
                    list.appendChild(li)
                });
            });
    }

    render() {
        return(
            <Fragment>
                <h3> This Application was implemented by {this.props.name}, in { this.props.year } </h3>

                <hr />
                <button type="button" onClick= {this.fetchData} className="btn btn-info">Fetch Posts</button>

                <ul id="posts-list" ref = { this.listRef }></ul>
            </Fragment>
        )
    }
}

export default Content