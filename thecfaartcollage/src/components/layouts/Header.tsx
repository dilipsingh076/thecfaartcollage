import Navbar from './Navbar';
import InstitutionalNavbar from './InstitutionalNavbar';

export default function Header() {
  return (
    <header>
      <InstitutionalNavbar />
      <Navbar />
    </header>
  );
}