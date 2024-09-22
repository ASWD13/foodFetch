import { useState } from "react";
import LoginComponent from "../Login/Login.component";
import ModalComponent from "../Modal/Modal.component";
import CustomButton from "../Buttons/Button.component";
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function NavbarComponent() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto lg:flex hidden  sm:hidden">
            <a className="mr-5 hover:text-white">First Link</a>
            <a className="mr-5 hover:text-white">Second Link</a>
            <a className="mr-5 hover:text-white">Third Link</a>
            <a className="hover:text-white">Fourth Link</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl xl:block lg:hidden">
              {"</>"}Food_Fetch
            </span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">

          {/* before login */}
            <CustomButton
              title="Login"
              variant="primary"
              style="px-4"
              rightIcon={
                <MdLogin className="text-white text-2xl cursor-pointer" />
              }
              onClick={() => setShowLogin(true)}
            />


            {/* post login */}
            {/* <div>
              <FaRegUser />
              Hi, Rohan
            </div> */}
          </div>
        </div>
      </header>

      <ModalComponent visible={showLogin} setVisible={setShowLogin}>
        <LoginComponent />
      </ModalComponent>
    </>
  );
}

export default NavbarComponent;
