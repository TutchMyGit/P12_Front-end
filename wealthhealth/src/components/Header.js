import '../styles/header.css'
import logo from '../assets/LOGO.png'

import { Link } from 'react-router-dom'
import React from 'react'

function Header(props) {
    return(
        <div className='header'>
            {props.homePage ?
                <React.Fragment>
                    <img src={logo} alt="Wealth Health" className='logo' />
                    <h1 className='title'>HRnet</h1>
                    <Link to='/Employees-List' className='link_to'>View Current Employees</Link>
                </React.Fragment>
            :
                <React.Fragment>
                    <img src={logo} alt="Wealth Health" className='logo' />
                    <Link to='/' className='link_to'>Create employee</Link>
                    <h2 className='current_employees'>Current Employees</h2>
                </React.Fragment>
            }
        </div>
    )
}

export default Header