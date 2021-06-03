import React from 'react'
import './Header.css'
import logo from '../../src/quickspaceLogo.png'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link>
                <img className="header_icon"
            src={logo}
            alt="quickspace logo"/>
            </Link>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
