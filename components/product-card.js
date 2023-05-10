import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Product(product) {
  return (
    <div
      className="p-3 m-3 flex flex-col justify-start"
      style={{ width: 450, background: "#fff", borderRadius: 5 }}
    >
      <Link href={`/posts/${product.category}/${product.id}`}>
        {product.title}
      </Link>
      <div style={{ width: 400, height: 400, position: "relative" }}>
        <Image src={product?.image} alt="image" fill />
      </div>
      <p>Price: {product?.price}</p>
    </div>
  );
}
