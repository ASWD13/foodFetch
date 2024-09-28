import { useEffect, useState } from "react";
import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar.component";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterComponent from "./Components/Footer/Footer.component";
import HomePage from "./Pages/Home.page";
import { Toaster } from "./Components/ui/sonner"
import { getUserLocation } from "./helpers/geolocation";



export default function App() {
  const [location, setLocation] = useState();
  console.log('location: ', location);
  useEffect(() => {
    AOS.init(); // Initialize AOS
    getUserLocation(setLocation);
  }, []);




  return (
    <>
      <NavbarComponent />
      <HomePage locationDetails={location} />


      <FooterComponent />
      <Toaster />
    </>
  );
}
