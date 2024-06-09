import Image from "next/image";
import NavbarOutside from "../../components/Navbar/NavbarOutside";
import Homestead from "./Home/Homestead/page";
import Offering from "./Home/Homestead/Offering";
import Contact from "./Home/Homestead/Contact";

export default function Home() {
  return (
    <div>
      <NavbarOutside />
      <Homestead />
      <Offering />
      <Contact />
    </div>
  );
}
