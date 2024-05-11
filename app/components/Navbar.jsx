
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
      <h2>Ali Style Code</h2>
      <Link href="/">Dashboard</Link>
      <br />
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

