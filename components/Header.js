import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
      <Link href="/projects">
        <p>Projects</p>
      </Link>
      <Link href="/contact">
        <p>Contact</p>
      </Link>
    </nav>
    <style jsx>{`
      header {
        background-color: none;
        padding: 10px 0;
      }
      nav {
        display: flex;
        justify-content: space-around;
        padding: 0 20px;
      }
      a {
        text-decoration: none;
        color: #fff;
        margin: 0 15px;
        font-size: 1.2em;
      }
    `}</style>
  </header>
);

export default Header;
