import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import baby from '../babyBday.jpg'
import car from '../oldCar.jpg'
import cake from '../cake.jpg'
import shop from '../shop.jpg'
import yogaInside from '../yogaInside.jpg'
import yogaOutside from '../yogaOutside.jpg'

function Home() {
    return (
        <div className="home">
          <Banner/>
          <div className="home_section">
              <Card source={shop} title="Outdoor Weddings" description="Find the perfect venue for your wedding"/>
              <Card source={baby} title="Birthdays" description="Make a special day unforgettable with breathtaking sites"/>
              <Card source={cake} title="Kick Backs" description="Find the a quiet place to chat with new and old friends!"/>
          </div>
          <div className="home_section">
            <Card source={car} title="Car Shows" description="No need to wait for once a year car shows, host your own!" price="$100/hr"/>
            <Card source={yogaInside} title="Indoor Rooms" description="Rent space for exercising, like hot yoga!" price="$75/hr"/>
            <Card source={yogaOutside} title="Outdoor Activities" description="Find a spot to tan, meditate, read or meet up with the gang" price="$30/hr"/>
          </div>
        </div>
    )
}

export default Home;