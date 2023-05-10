import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div>Hello World!</div>
      <div>
        Visit <Link href="/posts">Products</Link>
      </div>
      <p>
        Page example <Link href="/about">About</Link>
      </p>
    </main>
  );
}
