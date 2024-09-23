import { useState } from "react";
import LoginComponent from "../Login/Login.component";
import ModalComponent from "../Modal/Modal.component";
import CustomButton from "../Buttons/Button.component";
import { MdLogin, MdMenu, MdClose } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function NavbarComponent() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex order-first lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-start mb-4 md:mb-0">
            <span className="ml-3 text-xl xl:block ">
              {"</>"}Food_Fetch
            </span>
          </a>

          <div className="lg:w-2/5 flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded bg-gray-800 text-white focus:outline-none w-full lg:w-3/4"
            />
          </div>

          <div className="md:hidden flex items-center ml-auto absolute right-5 top-5">
            <button onClick={toggleMenu} className="text-white">
              {!menuOpen && <MdMenu size={24} />}
            </button>
          </div>

          <nav className={`md:flex md:w-2/5 absolute md:relative bg-gray-900 w-full pb-4 z-10 transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} md:max-h-none md:opacity-100`} style={{ overflow: "hidden" }}>
            <div className="flex flex-col md:flex-row">
            <MdClose size={24} className="absolute right-4 md:hidden" onClick={toggleMenu}  />
           
              <a className="p-2 hover:text-white">First Link</a>
              <a className="p-2 hover:text-white">Second Link</a>
              <a className="p-2 hover:text-white">Third Link</a>
              <a className="p-2 hover:text-white">Forth Link</a>



            {/* post login */}
              <CustomButton
                title="Login"
                variant="primary"
                style="px-4 w-1/2 ml-2 md:ml-0 md:w-auto"
                rightIcon={
                  <MdLogin className="text-white text-2xl cursor-pointer" />
                }
                onClick={() => setShowLogin(true)}
              />
            {/* <div>
              <FaRegUser />
              Hi, Rohan
            </div> */}
            </div>
          </nav>
        </div>
      </header>

      <ModalComponent visible={showLogin} setVisible={setShowLogin}>
        <LoginComponent />
      </ModalComponent>
    </>
  );
}

export default NavbarComponent;
