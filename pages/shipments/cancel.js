import axios from "axios";
 import React, { useEffect, useState , useRef } from "react";
 import Link from 'next/link';
 import { useRouter } from "next/router";


 function cancel(props) {

    const [message, setMessage] = useState('');
    const [cancel, setCancel] = useState('');
  
  
    const {
      id,
      orderNo,
      status,
    } = props;
      const handleCancel = async (e) => {
      const { data } = await axios.patch(`https://byters-shipping-microservice.vercel.app/shipments/cancel/${orderNo}`,{
        orderNo,
      });
      if (data) {
        setMessage(`Success! Your order number is Deleted`);
      }
    };
        return (
    
     <form>
    <div className="form-field">
      <input type="text" placeholder="EnterYour Order Number" required value={orderNo} onChange={(e)=> setCancel(e.target.value)} />
      <button className="btn" type="submit" onClick={handleCancel}>
        
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
              </svg>
      </button>
     </div>
    </form>
    
      );
      }
      
      export default cancel;