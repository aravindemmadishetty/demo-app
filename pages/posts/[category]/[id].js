import Image from "next/image";
import Link from "next/link";
export default function Product({ name, product }) {
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
      <div className="user-name">{name}</div>
      <h1>{product?.title}</h1>
      <h2>
        <Link href={`/posts/${product?.category}`}>{product?.category}</Link>
      </h2>
      <div>
        <Image src={product?.image} alt="image" width={400} height={400} />
      </div>
      <p>Price: {product?.price}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return {
    paths: data.map(({ id, category }) => ({
      params: { id: `${id}`, category },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return {
    props: {
      name: "Aravind",
      product: data.find(({ id }) => `${id}` === params.id),
    },
  };
}
