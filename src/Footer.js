import React, { Component, Fragment } from 'react'
import './css/Footer.css'

class Footer extends Component {
    render() {
        const year = new Date().getFullYear()
        return(
            <Fragment>
                <hr />
                <p className="footer">Copyright &copy; { year } ajar.com</p>
            </Fragment>
        )
    }
}

export default Footer