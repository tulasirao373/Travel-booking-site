import React,{useEffect} from 'react'
import './main.css'

//imported icons
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

//importing img from assets
import img from '../../Assets/Img1.jpg'
import Img2 from '../../Assets/Img2.jpg'
import Img3 from '../../Assets/Img3.jpg'
import Img4 from '../../Assets/Img4.jpg'
import Img5 from '../../Assets/Img5.jpg'
import Img6 from '../../Assets/Img6.jpg'
import Img7 from '../../Assets/Img7.jpg'
import Img8 from '../../Assets/Img8.jpg'
import Img9 from '../../Assets/Img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


//array named data 

const Data = [
{
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX ',
  fees: '$700',
  description: 'The epitome of romance Bora Bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventure activities'
},

{
  id:2,
  imgSrc: Img2,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  grade: 'CULTURAL RELAX ',
  fees: '$600',
  description: 'Huyana Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate issimply Spectacular'
},

{
  id:3,
  imgSrc: Img3,
  destTitle: 'Great Barier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX ',
  fees: '$700',
  description: 'One of the most remarkable Australian natural gifts is the Great Barier Reef The halmark of this place is lavish and Beauty  Always interwsting to be in this place'
},

{
  id:4,
  imgSrc: Img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade: 'CULTURAL RELAX ',
  fees: '$800',
  description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is Known for its luxurious stays and adventurous activities'
},

{
  id:5,
  imgSrc: Img5,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  grade: 'CULTURAL RELAX',
  fees: '$1100',
  description: 'A Cityin central Mexico, Guanajuato is Known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always Welcome'
},

{
  id:6,
  imgSrc: Img6,
  destTitle: 'Cinque Terre',
  location: 'Italy',
  grade: 'CULTURAL RELAX ',
  fees: '$840',
  description: 'The vibrant of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food! '
},

{
  id:7,
  imgSrc: Img7,
  destTitle: 'Angkor Wat',
  location: 'Cambodia',
  grade: 'CULTURAL RELAX ',
  fees: '$790',
  description: 'Angot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia, this place is known for its luxurious stays and adventure activities '
},

{
  id:8,
  imgSrc: Img8,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX ',
  fees: '$900',
  description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. this place is known for its luxurious stays and adaventurous activities'
},

{
  id:9,
  imgSrc: Img9,
  destTitle: 'Bali Island',
  location: 'Indonesia',
  grade: 'CULTURAL RELAX ',
  fees: '$500',
  description: 'Bali is an Indonesia Island and one of the best holiday destination in the Indonesian archipelago. Ball is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches '
},
]


const Main = () => {

  //i have created a react hook to add a scroll animation...
useEffect(()=>{
  Aos.init({duration: 2000})
}, [])


  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* here i have used high order method(map). to use that i have created list of object
        in one array named data from that we shall .map() array to fetch each sdestination at once */}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, 
            description, }) => {
              return(
                <div key={id} 
                data-aos="fade-up"
                className="singleDestination">
                  
                  <div className="imageDiv">
                    <img src={imgSrc} alt=
                    {destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck className='icon' />
                      </button>
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Main