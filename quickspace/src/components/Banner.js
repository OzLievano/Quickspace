import React, {useState} from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import {useHistory} from 'react-router-dom'

function Banner() {

    const [showSearch, setShowSearch] = useState(false)

    const history = useHistory()

    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button 
                onClick={()=>{setShowSearch(!showSearch)}}className="banner__SearchButton" variant="outlined">{showSearch ?"Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner_info">
                <h1>Get out and explore QuickSpaces</h1>
                <h5>Plan a different type of event to uncover the community around you.</h5>
                <Button onClick={()=>{history.push('/search')}}variant='outlined' >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
