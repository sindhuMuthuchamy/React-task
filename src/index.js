
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Search(){
  return(
    <div className='search-container'>
    <div className='search'>
      <input type='text' placeholder='search'/>
      <i class="fa-solid fa-magnifying-glass" style={{color: "#050505;"}}></i>
    </div>
    </div>
  )
}

function List(props){
  return(
    <div className='list-container'>
      
      <div className='container'>
        <img>{props.myImage}</img>
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
    // myImage : <source >import {  } from "module";</source>,
    myName :"Jessica Koel",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 11.26
  },
  {
    // myImage : <source >import {  } from "module";</source>,
    myName :"Komeinal Bolger",
    myDetails: "I'll Send you all the doucuments as soon as possible..",
    unread : "Click to read this message",
    myRating: 12.20
  },
  {
    // myImage : <source >import {  } from "module";</source>,
    myName :"Lilly",
    myDetails: "Are you going to business trip next week?",
    unread : "Click to read this message",
    myRating: 11.26
  },
  {
    // myImage : <source >import {  } from "module";</source>,
    myName :"Jessica Koel",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 11.26
  },
  {
    // myImage : <source >import {  } from "module";</source>,
    myName :"Jessica Koel",
    myDetails: "hey,Jeol.I here to help you out,please..",
    unread : "Click to read this message",
    myRating: 11.26
  },
  {
    // myImage : <source >import {  } from "module";</source>,
    myName :"Jessica Koel",
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
      return <List myName = {items.myName} myDetails = {items.myDetails} unread = {items.unread} myRating= {items.myRating}></List>
    })
      
  }
  </div>
)
