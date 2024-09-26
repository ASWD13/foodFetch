import { useState } from "react";
import LoginComponent from "../Login/Login.component";
import ModalComponent from "../Modal/Modal.component";

import { Button } from "../ui/button"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog"

function NavbarComponent() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Dialog>
        <div className="  hidden md:flex p-4 bg-slate-900" >
          <div className=" w-1/6 flex justify-center align-middle">
            <span className="ml-3 text-xl xl:block text-white">
              {"</>"}Food_Fetch
            </span>
          </div>
          <div className=" w-1/2 flex justify-center align-middle bg-yellow-800">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded text-white focus:outline-none w-full "
            />
          </div>
          <div className=" w-1/3 flex justify-center align-middle ">


            <a className="p-2 hover:text-white text-white">First Link</a>
            <a className="p-2 hover:text-white text-white">First Link</a>
            <a className="p-2 hover:text-white text-white">First Link</a>
          </div>
          <div className=" w-1/6 flex justify-center align-middle ">

            <DialogTrigger>
              <Button variant="link" className="text-white" onClick={toggleMenu}>login</Button>

            </DialogTrigger>
          </div>

        </div>




        <DialogContent className="h-full" >
          <DialogHeader>
            <h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center">Register</h2>
          </DialogHeader>
          <LoginComponent />
        </DialogContent>




        <ModalComponent visible={showLogin} setVisible={setShowLogin}>
        </ModalComponent>
      </Dialog>
    </>
  );
}

export default NavbarComponent;
