import { useState, useRef } from "react";
import * as axios from 'axios';
import { useRouter } from "next/router";

function Product(props) {
  let [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const {
    id,
  productName,
  description,
  image,
  quantity,
  price,
  slug,
  } = props;
  function incrementCount() {

    if (count < 10) {
      count = count + 1;
      setCount(count);
    }

  }
  function decrementCount() {

    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
  }
  function handleChange(evt) {
    console.log("new value", evt.target.value);
    if (setInput() == "") {
    }
    setInput()
  }
  const handleNewOrder = async (req,res) => {
    //ordermicroservice
    const {o}=await axios.default.post('https://byters-orders-microservice-git-master-huss8in.vercel.app/addOrder',{
  prodId: id,
  prodName:productName,
    })
    if(o){
      setMessage(`Success! Your order is created: ${o.orderID}`);
      var on=o.orderID
      const {n}=await axios.post("http://notificationss-6v6x6kl0o-nadinenashaat.vercel.app/api/order")
      if(n){
        console.log("success")
      }
    }
    //shipmentmicroservice
    const {s}=await axios.default.post('https://byters-shipping-microservice.vercel.app/shipments',{
      orderNo:17
    })

    const { data } = await axios.post('https://byters-payment-ammarclown.vercel.app/payment', {
      name:productName,
      unit_amount:price*5,
      quantity:1
    });
   // const {data}=await axios.default.post("https://notificationss-dn4dt659t-nadinenashaat.vercel.app/api/order")
    // const {trial}= await axios.post('https://notificationss-dn4dt659t-nadinenashaat.vercel.app/api/order',{
    //  to:"ammaryasseraaziz@gmail.com"
    // })
    // console.log(trial.to)
    if (data) {
      console.log(location.href)
      location.href=data.url

      setMessage(`Success! Your order is created, click this link to proceed to checkout: ${data.orderNo}`);
    }
  };
  // const handleNewOrder = async (e) => 
  //   // if (response) {
  //   //   setMessage(`Success! Your order number is: fulfilled`);
  //   //  }
  //   // console.log(response)
  //   console.log("hello")
  //   console.log(productName)
  //   //console.log(productName)
  //   console.log(description)
  //   console.log(price)
  //   console.log(props)
  //  // console.log(productName)
  // };

//   return (
//     <div className="container mx-auto px-6">
//       <div className="md:flex md:items-center">
//         <div className="w-full h-64 md:w-1/2 lg:h-96 ">
//           <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={image} alt="" />
//         </div>
//         <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
//           <h3 className="text-3xl leading-7 mb-2 font-bold uppercase lg:text-5xl">
//             {productName}
//           </h3>
//           <span className="text-2xl leading-7 font-bold mt-3">
//             ${price}
//           </span>
//           <div className="mt-12 flex flex-row justify-between ">
//             <button
//               className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
//               onClick={(e) => handleNewOrder(e)}
//             >
//               Order Product
//             </button>
//           </div>
//           <div>
//             <span className="text-red-600 leading-7 font-bold mt-3">
//               {message}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-16 md:w-2/3">
//         <h3 className="text-gray-600 text-2xl font-medium">description</h3>
//         {description}
//       </div>
//     </div>
//   );
// }

// export default Product;
return (
  <div className="container mx-auto px-6">
    <div className="md:flex md:items-center">
      <div className="w-full h-64 md:w-1/2 lg:h-96 ">
        <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={image} alt="" />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
        <h3 className="text-3xl leading-7 mb-2 font-bold uppercase lg:text-5xl">
          {productName}
        </h3>
        <span className="text-2xl leading-7 font-bold mt-3">
        <label for="Price" style={{ color: "black", "fontSize": "20px" }}>Price: </label>
          {price}$
        </span>

        {/* <>
    Count: {count}  //onInput={e => setInput(e.target.value)}
    <button onClick={() => setCount(initialCount)}>Reset</button>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
  </> */}
        <br></br><br></br>
        <form onSubmit={handleChange}>
          <div className="email font-bold">
            <label for="user_email" style={{ color: "black", "fontSize": "20px" }}>E-Mail: </label>
            <input type="email" onChange={(e) => setInput(e.target.value)} placeholder=" @example.com" />
          </div>
        </form>

        <br></br>
        <div className="number ">
          <li>How Many?</li>
          <label className="font-bold">Quantity: </label>&nbsp;
          <button onClick={decrementCount} style={{ color: "blue", "fontSize": "30px" }}> - </button>&nbsp; &nbsp;
          {count}&nbsp;&nbsp;
          <button onClick={incrementCount} style={{ color: "red", "fontSize": "25px" }}> + </button>
        </div>



        <div className="mt-12 flex flex-row justify-between font-bold">
          <button type="submit"
            className="border p-2 mb-8 border-green shadow-offset-black w-2/3 font-bold"
            onClick={(e) => handleNewOrder(e)}
          >
            Order Now
          </button>
        </div>
        <div>
          <span className="text-green-600 leading-7 font-bold mt-3">
            {message}
          </span>
        </div>
      </div>
    </div>

    <div className="mt-16 md:w-1/3 font-bold">
      <h3 className="text-black-600 text-2xl font-medium ">Details:</h3>
      {description}
    </div>
  </div>
);
}export default Product;