import Error from "next/error";
import { useRouter } from "next/router";
//import shipment from "./shipment";
import Shipment from "./shipment";


function ShipmentPageContainer({ shipment }) {
  <Shipment
  id={shipment.id}
  orderNo={shipment.orderNo}
  status={shipment.status}
  shipmentslug={shipment.shipmentslug}
  />
  // const { shipmentslug } = 
   console.log(shipmentslug)
     if (router.isFallback) {
       return <div>Loading...</div>
     }
   
     return (
         
       
       <div>
      
        hahahahah
 
 
       </div>
     );
   }
   





export async function getStaticProps({ params} ) {
    const shipmentslug = params.orderNo;
    const response = await fetch(`https://byters-shipping-microservice.vercel.app/shipments/${shipmentslug}`);
    const data = await response.text()
    const shipment = JSON.parse(data);
    console.log(params)
    return {
      props: {
        shipment,
      },
    };
  }

// pages/products/[slug]
export async function getStaticPaths() {
  const response = await fetch(`https://byters-shipping-microservice.vercel.app/shipments/${shipmentslug}`);
  const data = await response.text()
  const shipmentInfo = JSON.parse(data);
  const paths = shipmentInfo.map((shipment) => ({ params: { shipmentslug: String(shipment.orderNo) } }))
  return {
    shipmentInfo
  }
}
export default ShipmentPageContainer;