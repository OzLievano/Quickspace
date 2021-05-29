import React from 'react'
import './Searchpage.css'
import {Button} from '@material-ui/core'
import SearchResults from './SearchResults'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 venues • 26 august to 30 • 10 attendees</p>
                <h1>Venues nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of venue</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Venues and Size</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResults 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in the center of London"
                title="Throw a small intimate dinner at this spacious Edwardian House"
                description="5 attendees • Wifi • Professional Kitchen • Free Parking"
                star = {4.73}
                price= "£14 / hr"
                total= "£64 total"
            />
        </div>
    )
}

export default SearchPage
