import React, { Fragment } from 'react'
import './css/Footer.css'

function FooterFunctionalComponent(props) {
    const year = new Date().getFullYear()
    return(
        <Fragment>
            <p className="footer">Copyright &copy; { year }  { props.company }</p>
        </Fragment>
    )
}

export default FooterFunctionalComponent