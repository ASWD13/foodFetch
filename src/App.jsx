import { useEffect } from "react";
import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar.component";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterComponent from "./Components/Footer/Footer.component";
import HomePage from "./Pages/Home.page";
import { Toaster } from "./Components/ui/sonner"



export default function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS




  }, []);



  return (
    <>
      <NavbarComponent />
      <HomePage />


      <FooterComponent />
      <Toaster />
    </>
  );
}
