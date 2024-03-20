import Link from "next/link";

// Static metadata
export const metadata = {
  title: "About Next.js",
  description: "Learn basic Next.js",
};

export default function About() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>About me</h1>
    </>
  );
}
