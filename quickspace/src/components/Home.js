import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import baby from '../babyBday.jpg'
import car from '../oldCar.jpg'
import cake from '../cake.jpg'
import shop from '../shop.jpg'
import becomeHost from '../becomeHost.jpg'
import yogaInside from '../yogaInside.jpg'
import {useHistory} from 'react-router-dom'
import yogaOutside from '../yogaOutside.jpg'
import {Button} from '@material-ui/core'

function Home() {
    const history = useHistory();
    return (
        <div className="home">
          <Banner/>
          <h1 className="explore">Explore Nearby</h1>
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
          <h1 className="explore">Discover Experiences</h1>
          <div className="becomeHost">
            <img class="imgClass" src={becomeHost} alt="becomeHost Image"/>  
            <div className="host_info">
                <h1>Become a Host</h1>
                <h5>Earn extra income and unlock new opportunities by sharing your space.</h5>
                <Button onClick={()=>{history.push('/search')}}variant='outlined' >Learn More</Button>
            </div>
          </div>
          <div className="moreInfo">
            <section className="_1l3ys1i">
              <h4 className="_tfslnm">ABOUT</h4>
              <ul class="_yuolfv">
                <li class="_wmuyow">How QuickSpace works</li>
                <li class="_wmuyow">Newsroom</li>
                <li class="_wmuyow">Investors</li>
                <li class="_wmuyow">QuickSpace Plus</li>
                <li class="_wmuyow">QuickSpace Luxe</li>
                <li class="_wmuyow">SpaceTonight</li>
                <li class="_wmuyow">QuickSpace for Work</li>
                <li class="_wmuyow">Made possible by Hosts</li>
                <li class="_wmuyow">Careers</li>
                <li class="_wmuyow">Founders' Letter</li>
              </ul>
            </section>
            <section className="_1l3ys1i">
              <h4 className="_tfslnm">COMMUNITY</h4>
              <ul class="_yuolfv">
                <li class="_wmuyow">Diversity & Belonging</li>
                <li class="_wmuyow">Against Discrimination</li>
                <li class="_wmuyow">Accessibility</li>
                <li class="_wmuyow">Airbnb Associates</li>
                <li class="_wmuyow">Frontline Stays</li>
                <li class="_wmuyow">Guest Referrals</li>
                <li class="_wmuyow">Gift cards</li>
                <li class="_wmuyow">Quickspace.org</li>
              </ul>
            </section>
            <section className="_1l3ys1i">
              <h4 className="_tfslnm">HOST</h4>
              <ul class="_yuolfv">
                <li class="_wmuyow">Host your space</li>
                <li class="_wmuyow">Host an Online Experience</li>
                <li class="_wmuyow">Host an Experience</li>
                <li class="_wmuyow">Responsible hosting</li>
                <li class="_wmuyow">Resource Center</li>
                <li class="_wmuyow">Community Center</li>
              </ul>
            </section>
            <section className="_1l3ys1i">
              <h4 className="_tfslnm">SUPPORT</h4>
              <ul class="_yuolfv">
                <li class="_wmuyow">Our COVID-19 Response</li>
                <li class="_wmuyow">Help Center</li>
                <li class="_wmuyow">Cancellation Options</li>
                <li class="_wmuyow">Neighborhood Support</li>
                <li class="_wmuyow">Trust & Safety</li>
              </ul>
            </section>
          </div>
        </div>
    )
}

export default Home;