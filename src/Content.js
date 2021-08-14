import React, { Component, Fragment } from 'react';

class Content extends Component {

   state = {
       posts: []
   }

   clickedItem = item => {
       console.log(item)
   }

    fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({
                        posts: jsonData
                    });
            });
    }

    render() {
        return(
            <Fragment>
                <h3> This Application was implemented by {this.props.name}, in { this.props.year } </h3>

                <hr />

                <button type="button" onClick= {this.fetchData} className="btn btn-info">Fetch Posts</button>
                <br /><br />
                <p className="badge bg-primary text-wrap"> Posts are { this.state.posts.length } Items long</p>.

                <ul id="posts-list">
                    {
                        this.state.posts.map(item => {
                            return <li key={item.id}>
                                <a href="#!" onClick={this.clickedItem}>
                                    {item.title}
                                </a>
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Content