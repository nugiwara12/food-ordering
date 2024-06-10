import React from "react";
import Navbar from "../../../../components/Navbar/NavbarOutside";
import Message from "./Message";
import Footer from "../../../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <main className="w-full">
        <Navbar />
        <Message />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat min-h-screen"
          style={{ backgroundImage: 'url("/logo/background.jpg")' }}
        >
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Contact;
