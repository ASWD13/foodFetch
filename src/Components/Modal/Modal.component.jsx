import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const ModalComponent = ({ children, visible, setVisible }) => {
    const handleClose = () => {
        setVisible(false);
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out ${
                visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999, 
            }}
        >
            <IoMdClose
                className="text-white text-4xl absolute top-6 right-6 cursor-pointer"
                onClick={handleClose}
            />
            <div className={`p-4 rounded transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-4 opacity-0'}`}>
                {children}
            </div>
        </div>
    );
};

export default ModalComponent;
