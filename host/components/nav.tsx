import Link from "next/link";

const Nav = () => (
  <div>
    <li>
      <Link href="/app1">Load app1</Link>
    </li>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/app2">Load app2</Link>
    </li>
  </div>
);

export default Nav;
