import Image from "next/image";
import NavbarOutside from "../../components/Navbar/NavbarOutside";
import Homestead from "./Home/Homestead/page";
import Offering from "./Home/Homestead/Offering";
import Footer from "../../components/Footer/Footer";
import CarouselPage from "./Home/Homestead/CarouselPage";

export default function Home() {
  return (
    <main
      className="w-full h-full bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: 'url("/logo/background.jpg")' }}
    >
      <NavbarOutside />
      <Homestead />
      <Offering />
      <CarouselPage />
      <Footer />
    </main>
  );
}
