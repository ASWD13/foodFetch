import { useContext, useState } from "react";
import ModalComponent from "../Modal/Modal.component";
import { GoSun } from "react-icons/go";
import { IoIosMoon } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";


import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import RegisterComponent from "../Auth/register.component";
import { LoginComponent } from "../Auth/login.component";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet"



import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command"
import { appAxios } from "../../utils/apiConfig";
import { Link, useNavigate } from "react-router-dom";
import { DialogContext } from "../../context/dialog.context";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/features/user/userSlice";
import CartSideSheet from "./cart.sideSheet.component";

function NavbarComponent() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("")
  const [queryRes, setQueryRes] = useState([])

  const theme = (localStorage.getItem("vite-ui-theme"));

  const userData = useSelector((state) => state.user?.user)
  const cartData = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch()


  const { openDialog, setOpenDialog, openCart, setOpenCart } = useContext(DialogContext)


  const [authScreen, setAuthScreen] = useState("login");
  const { setTheme } = useTheme()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = async (e) => {
    setQuery(e.target.value)

    const { data: { data } } = e.target.value.length > 0 && await appAxios.get("/dishes",
      {
        params: {
          "filters[Name][$contains]": query,
        }
      }

    );
    setQueryRes(data)
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    dispatch(setUser({}))
  }

  Object.values(cartData)?.length
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        {/* desktop mode  starts*/}
        <div className="  hidden md:flex p-4 bg-slate-900">
          <div className=" w-1/6 flex justify-center align-middle">
            <Link to={"/"}>
              <span className="ml-3 text-xl xl:block text-white">
                {"</>"}Food_Fetch🥗
              </span>

            </Link>
          </div>
          <div className=" w-1/2 flex justify-center align-middle">


            <Command>
              <input placeholder="serach for you favourate dish..." className="p-2 rounded focus:outline-none w-full text-black" value={query} onChange={(e) => {
                handleSearch(e)

              }} />
              {query && queryRes?.length > 0 &&
                <CommandList className="fixed bg-slate-800 w-[42%] top-14 rounded-lg z-10">
                  <CommandEmpty>No results found.</CommandEmpty>

                  <CommandGroup heading="results">
                    {queryRes?.map((res) =>

                      <CommandItem key={res?.id} onClickCapture={() => {
                        navigate(`/product/${res.attributes.slug}`)
                        setQueryRes([])
                        setQuery(res.attributes.Name)
                      }} >{res.attributes.Name}</CommandItem>
                    )
                    }
                  </CommandGroup>
                </CommandList>
              }
            </Command>

          </div>
          <div className=" w-1/3 flex justify-center align-middle ">
            <Link to={"/"} className="p-2 hover:text-white text-white"> Menu</Link>
            <Link to={"/categories"} className="p-2 hover:text-white text-white"> Categories</Link>
            <Link to={"/contact-us"} className="p-2 hover:text-white text-white"> Contact Us</Link>
          </div>
          <div className=" w-1/6 flex justify-between items-center ">
            {userData?.email ? <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">{userData?.username?.slice(0, 8)}
                {userData?.username?.length > 7 ? "..." : ""}
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" >Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" >Orders</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>LogOut</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> :
              <Button variant="ghost" onClick={() => setOpenDialog(true)}>
                Login
              </Button>}


            <Sheet open={openCart} onOpenChange={setOpenCart}>
              <SheetTrigger>
                <div className="relative cursor-pointer">
                  <span className="bg-green-600 p-1 rounded-full px-2 absolute  text-xs top-[-15px] right-[-5px]">{Object.values(cartData)?.length}</span>
                  <MdOutlineShoppingCart className="text-2xl" />
                </div>
              </SheetTrigger>
              <SheetContent className="min-w-[550px]"  >
                <CartSideSheet />
              </SheetContent>
            </Sheet>

            {theme === "light" ? <GoSun className="text-gray-50 cursor-pointer" onClick={

              () => {
                localStorage.setItem("vite-ui-theme", "dark")
                window.location.reload()

                setTheme("dark")
              }} /> : <IoIosMoon className="cursor-pointer" onClick={() => {
                localStorage.setItem("vite-ui-theme", "light")
                setTheme("light")
                window.location.reload()
              }} />


            }



          </div>
        </div>

        {/* desktop mode  ends*/}


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

        <DialogContent

        // className="h-full"

        >
          <DialogTitle className=" text-3xl font-medium title-font mb-5 text-center">

            {authScreen == "login"
              ? "Welcome Back Foodiee🍕"
              : "Lets Register🍰"}
          </DialogTitle>
          {authScreen == "login" ? <LoginComponent /> : <RegisterComponent />}
          <p className="text-xs  text-center cursor-pointer ">
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
