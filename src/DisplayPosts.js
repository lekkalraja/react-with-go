import React, { Component } from 'react'


class DisplayPosts extends Component {

    render() {
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.posts.map(post =>
                            <tr className="table-info" key={ post.id } >
                                <th scope="row">{ post.userId } </th>
                                <td> {post.id } </td>
                                <td> {post.title } </td>
                                <td> { post.body } </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default DisplayPosts