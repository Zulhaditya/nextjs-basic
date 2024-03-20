import Link from "next/link";

export default function Product() {
  const productId = 100;

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>List of product</h1>
      <ul>
        <h2>
          <Link href="products/1">Product-1</Link>
        </h2>
        <h2>
          <Link href="products/2">Product-2</Link>
        </h2>
        <h2>
          <Link href="products/3">Product-3</Link>
        </h2>
        <h2>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </h2>
      </ul>
    </div>
  );
}
