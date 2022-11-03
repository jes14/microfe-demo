import Link from "next/link";

const Nav = () => (
  <div>
    <li>
      <Link href="/mario">Load Mario</Link>
    </li>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/luigi">Load Luigi</Link>
    </li>
  </div>
);

export default Nav;
