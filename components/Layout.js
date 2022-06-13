// import { useState, useEffect } from "react";
// import Link from "next/link";
// import UserIcon from "./ui/user";
// import ShoppingCartIcon from "./ui/shoppingcart";
// import FavoriteIcon from "./ui/favorite";
// import { useRouter } from "next/router";

// function Layout({ children }) {
//   const [session, setSession] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const handleMenu = () => setMenuOpen(!menuOpen);
//   const handleOpen = () => setCartOpen(!cartOpen);
//   const [haveProducts, setHaveProducts] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const router = useRouter();
//   return (
//     <div className="">
//       <header>
//         <div className="container mx-auto px-6 py-3">
//           <div className="flex items-center justify-between">
//             <div className="w-full text-red-700 md:text-left text-2xl font-semibold">
//               Rabbit Mart - SE GIU
//             </div>
//             <div className="flex items-center justify-end w-full lg:w-2/5 lg:justify-around">
//               <button className="text-gray-600">
//                 <UserIcon />
//               </button>
//               <button
//                 className="text-gray-600 ml-4 lg:ml-0"
//                 // onClick={getFavoriteListHandler}
//                 onClick={(e) => e.preventDefault()}
//               >
//                 <FavoriteIcon />
//               </button>
//               {/* shopping cart icon */}
//               <button
//                 // onClick={getShoppingCartHandler}
//                 onClick={(e) => e.preventDefault()}
//                 className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
//               >
//                 <ShoppingCartIcon />
//               </button>
//             </div>
//           </div>
//           <nav
//             className={`${menuOpen ? "" : "hidden"
//               } sm:flex sm:justify-center sm:items-center mt-4 `}
//           >
//             <div className="flex flex-col sm:flex-row">
//               <Link href="/">
//                 <button className="border font-mono p-2 w-1/3 bg-lime-300 border-black shadow-offset-black lg:w-24 lg:mr-8">
//                   Home
//                 </button>
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </header>
//       <main className="my-8">{children}</main>
//     </div>
//   );
// }

// export default Layout;
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Product from './Product';

function Layout({ children }) {
  const [session, setSession] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search,setSearch]=useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(( )=> {
    if (search){
  
    }
    },[search])
  const router = useRouter();
  
  return (
    <div className="">

      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="w-full text-red-700 md:text-left text-2xl font-semibold">
            <div className="flex flex-col sm:flex-row">

            <form autoComplete="off" className="mt-2 col-md px-0">
               <input type="text" className="form-control" list="name"
               value={search.toLowerCase()} onChange={e=> setSearch(e.target.value)}/>
               <datalist id="name">
                 <option value ={Product.name}>Product Name </option>
               </datalist>

             <button className="position-absolute btn btn-info"
             style={{top:0,right:0}}>
              Search
             </button>

            </form>
            </div>   
            </div>
            </div>
          <nav
            className={`${menuOpen ? "" : "hidden"
              } sm:flex sm:justify-center sm:items-center mt-4 `}
          >
           
            <div className="flex flex-col sm:flex-row">
            <Link href="/">
            <button type="button" class="btn btn-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                </svg>
                
            </button>
                 </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row">
              <Link href="/shipments/shipment">
              <button type="button" class="btn btn-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
                
              </button>
              </Link>
              <Link href="/shipments/cancel">
              <button type="button" class="btn btn-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
              </svg>
                
              </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="my-8">{children}</main>
    </div>
  );
}

export default Layout;
