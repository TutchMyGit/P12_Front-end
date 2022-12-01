import '../styles/header.css'

import { Link } from 'react-router-dom'
import React from 'react'

function Header(props) {
    return(
        <div className='header'>
            {props.homePage ?
                <React.Fragment>
                    <h1 className='title'>HRnet</h1>
                    <Link to='/Employees-List' className='link_to'>View Current Employees</Link>
                </React.Fragment>
            :
                <React.Fragment>
                    <Link to='/' className='link_to'>Create employee</Link>
                    <h2 className='current_employees'>Current Employees</h2>
                </React.Fragment>
            }
        </div>
    )
}

export default Header