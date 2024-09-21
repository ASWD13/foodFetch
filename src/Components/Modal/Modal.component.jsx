import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const ModalComponent = ({ children, visible, setVisible }) => {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }} className={`bg-gray-900  h-[100vh] w-[100%] absolute top-0 flex items-center justify-center ${visible ? "" : "hidden"}`} >

            <IoMdClose className="text-white text-4xl  absolute top-6 right-6 cursor-pointer" onClick={() => setVisible(!visible)} />




            {children}




        </div >
    )
}

export default ModalComponent