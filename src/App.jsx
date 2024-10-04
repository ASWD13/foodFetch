import { useEffect, useState } from "react";
import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar.component";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterComponent from "./Components/Footer/Footer.component";
import { Toaster } from "./Components/ui/sonner"
import RootRouting from "./routes";
import { DialogContext } from "./context/dialog.context";



export default function App() {
  const [openDialog, setOpenDialog] = useState(false)



  useEffect(() => {
    AOS.init(); // Initialize AOS

  }, []);




  return (
    <>
      <DialogContext.Provider value={{ openDialog, setOpenDialog }}>
        <NavbarComponent />
        <div className="md:mx-24">
          <RootRouting />
        </div>
        <FooterComponent />
      </DialogContext.Provider>
      <Toaster />
    </>
  );
}
