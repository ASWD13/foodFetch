import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { appAxios } from "../../utils/apiConfig";
import { MdDelete } from "react-icons/md";
import { getDiscountedPrice } from "../../helpers";


const CartSideSheet = () => {
    const [cartData, setCartData] = useState();
    const userData = useSelector((state) => state.user.user);
    console.log("cartData: ", cartData);

    const getCartDetails = async () => {
        const {
            data: { data },
        } = await appAxios.get("/carts", {
            params: {
                "filters[userID][$eq]": userData.id,
                populate: "deep",
            },
        });
        setCartData(data);
    };

    useEffect(() => {
        getCartDetails();
    }, []);

    // console.log('cartData: ', cartData);
    return (
        <div className="" >
            <SheetHeader>
                <SheetTitle className="text-3xl"> My Cart</SheetTitle>
                <SheetDescription>Info Related to your cart</SheetDescription>

                <div className=" ">
                    {cartData?.map((cart) => {
                        const { Name, Image, Price, discount } = cart.attributes?.dishes?.data?.[0]?.attributes || {}
                        const discountedPrice = getDiscountedPrice(Price, discount);
                        return (
                            <div className="flex gap-4  items-center" key={cart.id}>
                                <div>
                                    <img
                                        className="w-24 rounded-2xl"
                                        src={
                                            Image?.data?.[0]?.attributes?.url
                                        }
                                        alt=""
                                    />
                                </div>
                                <div>{Name}</div>
                                <div>{discountedPrice}*{cart.attributes?.quantity} = ₹{cart.attributes?.amount}</div>
                                <div><MdDelete className="text-destructive cursor-pointer" onClick={() => alert("sdfsdf")} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SheetHeader>
        </div>
    );
};

export default CartSideSheet;
