import Image from "next/image";
import Link from "next/link";
import Product from "../../components/product-card";

export default function ProductPage({ name, data }) {
  return (
    <div>
      <style jsx>{`
        h1 {
          font-size: 2em;
        }
        h2 {
          font-size: 1.5em;
        }
        .user-name {
          font-weight: bold;
        }
      `}</style>
      <ul className="products flex items-end flex-wrap justify-center">
        {data.map((el) => (
          <li key={el.id}>
            <Product {...el} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await fetch("http:localhost:3000/api/products").then((res) =>
    res.json()
  );
  return {
    props: {
      name: "Aravind",
      data,
    },
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       name: "Aravind",
//     },
//   };
// }
