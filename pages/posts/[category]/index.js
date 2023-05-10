import Link from "next/link";
import Product from "../../../components/product-card";

export default function PostPage({ categoryData }) {
  return (
    <>
      <h1>Post: {categoryData[0].category}</h1>
      <ul className="flex items-end flex-wrap justify-center">
        {categoryData.map((el) => (
          <li key={el.id}>
            <Product {...el} />
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  let categories = [];
  data.forEach((product) => {
    if (categories.includes(product.category)) {
      return;
    }
    categories.push(product.category);
  });
  // return {
  //   paths: categories.map((category) => ({
  //     params: { category },
  //   })),
  //   fallback: false,
  // };

  //
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return {
    props: {
      name: "Aravind",
      categoryData: data.filter((el) => el.category === params.category),
    },
  };
}
