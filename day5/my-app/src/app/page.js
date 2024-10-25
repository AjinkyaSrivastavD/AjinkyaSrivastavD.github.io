import "daisyui/dist/base";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Home page</h1>
      <Link href={"/about"}> About page </Link>
    </div>
  );
}
