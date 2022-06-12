import axios from "axios";
 import React, { useEffect, useState , useRef } from "react";
 import Link from 'next/link';
 import { useRouter } from "next/router";

 

function shipment(props) {

  const [message, setMessage] = useState('');
  const [shipment, setShipment] = useState('');
  const {
    id,
    orderNo,
    status,
    shipmentslug,
  } = props;
  //  const handleShipmentStatus = async (e) => {
  //   console.log(e.target.value);
  //   const { data } = await axios.get(`https://byters-shipping-microservice.vercel.app/shipments/${orderNo}`, {
  //     orderNo,
  //   });
  //   if (data) {
  //     setMessage(`Success! Your order number is: ${data.status}`);
  //   }
  // };
  //<Link href={`pages/shipments/${shipmentslug}`},pages/shipments/[orderNo]
      return (

   <form>
  <div className="form-field">
    <input type="text" placeholder="Enter Your Order Number" required value={orderNo} onChange={(e)=> setShipment(e.target.value)} />
    
    <Link href={{ pathname :`https://byters-shipping-microservice.vercel.app/shipments/${shipment}`, query:{orderNo:shipment}}}> 
   

    <button className="btn" type="submit" >
      
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
    </button>
    
    </Link> 
    
  </div>
  </form>
  
    );
    }

   // setTimeout(shipment(props){ window.location.href="/" }, 10000);
  
    export default shipment;