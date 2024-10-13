import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { appAxios } from "../../utils/apiConfig";

const CartSideSheet = () => {

    const userData = useSelector((state) => state.user.user)
    const cartData = useSelector((state) => state.cart.cart)
    console.log('cartData: ', cartData);

    const getCartDetails = async () => {
        const {
            data: { data },
        } = await appAxios.get("/carts", {
            params: {
                "filters[userID][$eq]": userData.id,
                populate: "*",
            },
        });
        console.log('data: ', data);
        // setProductDetails(data?.[0]);
    }





    useEffect(() => {

        getCartDetails()
    }, [])



    // console.log('cartData: ', cartData);
    return (
        <div>
            <SheetHeader>
                <SheetTitle className="text-3xl"> My Cart</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
        </div>
    );
};

export default CartSideSheet;
