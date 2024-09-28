import { useState } from "react";
import ModalComponent from "../Modal/Modal.component";

import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import RegisterComponent from "../Auth/register.component";
import { LoginComponent } from "../Auth/login.component";

function NavbarComponent() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authScreen, setAuthScreen] = useState("login");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Dialog>
        <div className="  hidden md:flex p-4 bg-slate-900">
          <div className=" w-1/6 flex justify-center align-middle">
            <span className="ml-3 text-xl xl:block text-white">
              {"</>"}Food_Fetch🥗
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
            <a className="p-2 hover:text-white text-white">Menu</a>
            <a className="p-2 hover:text-white text-white">Reservations</a>
            <a className="p-2 hover:text-white text-white">Contact Us</a>
          </div>
          <div className=" w-1/6 flex justify-center align-middle ">
            <DialogTrigger>
              <Button
                variant="link"
                className="text-white"
                onClick={toggleMenu}
              >
                Login
              </Button>
            </DialogTrigger>
          </div>
        </div>

        <div className="bg-slate-900 md:hidden">
          <div className="flex justify-center p-4">
            {!menuOpen ? (
              <BiMenu
                className="text-white absolute top-4 right-4"
                size="30"
                onClick={toggleMenu}
              />
            ) : (
              <CgClose
                className="text-white absolute top-4 right-4"
                size="30"
                onClick={toggleMenu}
              />
            )}
            <span className="ml-3 text-xl xl:block text-white">
              {"</>"}Food_Fetch🥗
            </span>
          </div>
          {menuOpen && (
            <div className="  flex flex-col justify-center align-middle ">
              <a className="p-2 hover:text-white text-white">Menu</a>
              <a className="p-2 hover:text-white text-white">Reservations</a>
              <a className="p-2 hover:text-white text-white">Contact Us</a>

              <div className=" w-1/6 flex justify-center align-middle ">
                <DialogTrigger>
                  <Button
                    variant="link"
                    className="text-white"
                    onClick={toggleMenu}
                  >
                    Login
                  </Button>
                </DialogTrigger>
              </div>
            </div>
          )}
        </div>

        <DialogContent className="h-full">
          <h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center">
            {authScreen == "login"
              ? "Welcome Back Foodiee🍕"
              : "Lets Register🍰"}
          </h2>
          {authScreen == "login" ? <LoginComponent /> : <RegisterComponent />}
          <p className="text-xs text-gray-500 ">
            {authScreen == "login" ? (
              <span onClick={() => setAuthScreen("register")}>
                Click here to register your hunger🍔
              </span>
            ) : (
              <span onClick={() => setAuthScreen("login")}>
                Back to login🍩
              </span>
            )}
          </p>
        </DialogContent>

        <ModalComponent
          visible={showLogin}
          setVisible={setShowLogin}
        ></ModalComponent>
      </Dialog>
    </>
  );
}

export default NavbarComponent;
