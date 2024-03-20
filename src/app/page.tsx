import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <div>
        <Link href="/about">About</Link>
        <Link href="/products">Product</Link>
      </div>
    </>
  );
}
