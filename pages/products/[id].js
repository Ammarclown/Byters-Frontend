import Error from "next/error";
import { useRouter } from "next/router";
import Product from "../../components/Product";

function ProductPageContainer({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Product
      id={product.id}
      productName = {String(product.productName)}
      description={String(product.description)}
      quantity={product.quantitiy}
      //size = {product.size}
      image = {product.image}
      slug = {product.slug}
      price = {product.price}
      //stock = {product.stock}
      //category = {product.category}
      //measurement = {product.measurement}
      //weight = {product.weight}
    />
  );
}

export async function getStaticProps({ params }) {
  const productid = params.id;
  console.log(productid)
  const response = await fetch(`https://byters-micro-inventory-jouannatadros.vercel.app/products/`+productid);
  const data = await response.text()
  var mdata=data.substring(1,data.length-1)
  console.log(data)
  const product = JSON.parse(mdata);
  console.log(product)
  console.log(mdata)
  return {
    props: {
      product,
    },
  };
}

// pages/products/[slug]
export async function getStaticPaths() {
  const response = await fetch('https://byters-micro-inventory-jouannatadros.vercel.app/products');
  //const response = await fetch('https://se-lecture-8-node-vercel-h814dy0vt-desoukya-gmailcom.vercel.app/api/products');
  const data = await response.text()
  const products = JSON.parse(data);
  const paths = products.map((product) => ({ params: { id:product.id }}))
    return {
    paths,
    fallback: false,
  }
}
export default ProductPageContainer;
// import Error from "next/error";
// import { useRouter } from "next/router";
// import Product from "../../components/Product";


// function ProductPageContainer({ product }) {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading...</div>
//   }

//   return (
//     <Product
//       id={product.id}
//       name={product.name}
//       size={product.size}
//       image={product.image}
//       slug={product.slug}
//       price={product.price}
//       stock={product.stock}
//       category={product.category}
//       measurement={product.measurement}
//       weight={product.weight}
//     />
//   );
// }

// export async function getStaticProps({ params }) {
//   const productSlug = params.slug;
//   const response = await fetch(`https://se-lecture-8-node-vercel-h814dy0vt-desoukya-gmailcom.vercel.app/api/products/${productSlug}`);
//   const data = await response.text()
//   const product = JSON.parse(data);
//   console.log(product)
//   return {
//     props: {
//       product,
//     },
//   };
// }

// // pages/products/[slug]
// export async function getStaticPaths() {
//   const response = await fetch('https://se-lecture-8-node-vercel-h814dy0vt-desoukya-gmailcom.vercel.app/api/products');
//   const data = await response.text()
//   const products = JSON.parse(data);
//   const paths = products.map((product) => ({ params: { slug: String(product.id) } }))
//   return {
//     paths,
//     fallback: false,
//   }
// }
// export default ProductPageContainer;
