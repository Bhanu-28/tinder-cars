import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css';


function TinderCards() {
  const [cars,setCars]=React.useState([
    {
      name: 'Tesla',
      url:'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg'
    },
    {
      name: 'BMW',
      url:'https://www.bmw-motorsport.com/content/dam/bmw/marketBMWSPORTS/bmw-motorsport_com/assets/bmw-m-motorsport/race-cars/bmw-m4-gt4-2023/bmw-m4-gt4-stage-teaser-01.jpg.asset.1655285283212.jpg'
    },
    {
      name :'lykan',
      url:'https://www.motorbiscuit.com/wp-content/uploads/2020/06/Lykan-Hypersport-cover.jpg?w=1024&h=512'
    },
    {
      name :'porsche',
      url:'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1080x624/dam/pnr/2022/Products/911-Classic/_F1A0988_le_02a.jpeg/jcr:content/_F1A0988_le_02a.jpeg'
    }


  ]);
  //hooks are functions that can be used in react components 
  return (
    <div className='card-container'>
    {
      cars.map( //mapping the cars iterating all elelments each element is car and each having name  
        car =>(   //and each card is getting inside tinder card 
          <TinderCard className='swipe' key={car.name} preventSwipe={['up','down']}>
            <div style={{backgroundImage:`url(${car.url})`}} className='card'>
              <h2>{car.name}</h2>
            </div>
          </TinderCard>
        )
      )
    }
    </div>
  )
}

export default TinderCards