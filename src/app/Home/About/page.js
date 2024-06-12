import React from "react";
import NavbarOutside from "../../../../components/Navbar/NavbarOutside";
import Timeline from "./Timeline";
import Developer from "./Developer";
import Footer from "../../../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <NavbarOutside />
      <main
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: 'url("/logo/background.jpg")' }}
      >
        <Timeline />
        <Developer />
        <Footer />
      </main>
    </>
  );
};

export default About;
