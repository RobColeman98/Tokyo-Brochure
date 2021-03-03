import navStyles from "../styles/Nav.module.css";
import Link from "next/link"

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> 
        </li>

        <li>
          <Link href="/attractions">Attractions</Link>  
        </li>

        <li>
          <Link href="/hotels">Hotels</Link>  
        </li>
      </ul>
    </nav>
  );
};
