
import ReactDOM from 'react-dom/client';
import './index.css'

import one from '../src/assets/images/p01.jpg'
import two from '../src/assets/images/p02.jpg'
import three from '../src/assets/images/p03.jpg'
import four from '../src/assets/images/p04.jpg'
import five from '../src/assets/images/p05.jpg'
import six from '../src/assets/images/p06.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Search(){
  return(
    <div className='search-container'>
    <div className='search'>
      <input type='text' placeholder='search'/>
      <p><i class="fa-solid fa-magnifying-glass" style={{color: "#050505;"}}></i></p>
    </div>
    </div>
  )
}

function List(props){
 
  return(
    <div className='list-container'>
      <div className='container'>
        <img src = {props.myImage} alt='person'></img>
    <div className='list-details'>
    <h3>{props.myName}</h3>
    <p className='details'>{props.myDetails}</p>
    <p className='unread'>{props.unread}</p>
    </div>
    <div className='rating'>
      <p>{props.myRating}</p>
      <p><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i></p>
    </div>
    </div>
    </div>
  )
}

var detail = [
  {
    myImage : one ,
    myName :"Jessica Koel",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 11.26
  },
  {
    myImage : two ,
    myName :"Komeinal Bolger",
    myDetails: "I'll Send you all the doucuments as soon as possible..",
    unread : "Click to read this message",
    myRating: 12.20
  },
  {
    myImage : three ,
    myName :"Lilly",
    myDetails: "Are you going to business trip next week?",
    unread : "Click to read this message",
    myRating: 12.26
  },
  {
    myImage : four ,
    myName :"Jannet Merlin",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 9.26
  },
  {
    myImage : five ,
    myName :"Jeni Samuel",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 10.26
  },
  {
    myImage : six ,
    myName :"Jecintha",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 11.26
  }
]

root.render(
  <div>
    <Search></Search>
    {
      detail.map(function(items,index)
    {
      return <List myImage={items.myImage}  myName = {items.myName} myDetails = {items.myDetails} unread = {items.unread} myRating= {items.myRating}></List>
    })
      
  }
  </div>
)
