import axios from "axios";
import React, { useEffect, useState } from "react";
import './components/featured/Featured'
import {useNavigate} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'

function DataFetching(){
    let navigate=useNavigate()
    const [matches,setmatches]=useState([])
    useEffect(()=>{
        axios.get('https://bug-diggerz-shop.vercel.app/api/records')
        .then(res=>{
            console.log(res)
            setmatches(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const handleReserve= (match)=>{
        console.log(match)
    }
    return(
        // <div>
            
        // </div>
        <div className="featured">
            
                {matches.map(fixture=>(
                    <>
                    
                        <div key={fixture.matchNumber} className="featuredItem">
                            {/* <img src="https://img.freepik.com/premium-vector/argentina-vs-saudi-arabia-football-2022-group-c-world-football-competition-championship-match_7280-7331.jpg?w=2000" alt="" className="featuredImg" /> */}
                            <img src={fixture.image} className="featuredImg" />
                            <div  className="featuredContent">
                            <h3>{fixture.homeTeam} vs {fixture.awayTeam}</h3>
                            <h5>Location:{fixture.location}</h5>
                            <h5>mno:{fixture.matchNumber}</h5>
                            <button onClick={()=>navigate(`/matches/${fixture.matchNumber}`)} class="buy">Reserve Now</button>
                    
                    
                    
                    </div>
                </div>
                    </>
                ))}

        </div>
        
    )
}
function MatchFetching(){
    const id=5
    let navigate=useNavigate()
    const [fixtures,setFixtures]=useState([])
    useEffect(()=>{
        axios.get(`https://bug-diggerz-shop.vercel.app/api/records/${id}`)
        .then(res=>{
            console.log(res)
            setFixtures(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div className='match'>
        <Navbar />
        <img src={fixtures.image}></img>
        <div className="matchContainer">
          <div className="matchWrapper">
            <h1 className="matchTitle"></h1>
  
            <div className="matchImage">
            </div>
            <div className="matchInfo">
  
              <div className="Category">
                <FontAwesomeIcon className="CategoryIcon" icon={faEye} />
                <span> </span>
                {/* <img src="https://i.ibb.co/NsrPvrL/qatarvssenegal.png"></img> */}
                <label for="Category">Choose a Category:</label>
                <select data-menu name="Category">
                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                </select>
              </div>
  
  
              <div className="Tickets">
                <FontAwesomeIcon className="CategoryIcon" icon={faTicket} />
                <span> </span>
                <label for="Category"> Number of tickets:</label>
                <select data-menu name="Category">
                  <option onclick="PriceCalc(1)" >1</option>
                  <option onclick="PriceCalc(2)" >2</option>
                  <option onclick="PriceCalc(3)" >3</option>
                  <option onclick="PriceCalc(4)" >4</option>
                  <option onclick="PriceCalc(5)" >5</option>
                  <option onclick="PriceCalc(6)" >6</option>
                </select>
               
                </div>
                <div className="procceed">
                <button> Proceed to checkout</button>
  
              </div>
              
  
            </div>
          </div>
        </div>
      </div>
        
        
    )
}
export {DataFetching,MatchFetching};