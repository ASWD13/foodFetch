import { useState } from "react"
import LoginComponent from "../Login/Login.component"
import ModalComponent from "../Modal/Modal.component"

function NavbarComponent() {
    const [showLogin, setShowLogin] = useState(false)
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

                        <span className="ml-3 text-xl xl:block lg:hidden">{"</>"}Food_Fetch</span>
                    </a>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onClick={()=>setShowLogin(true)} >Login</button>
                    </div>
                </div>
            </header>

            <ModalComponent visible={showLogin} setVisible={setShowLogin}   >
                <LoginComponent />
            </ModalComponent >


        </>
    )
}

export default NavbarComponent