import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appAxios } from "../utils/apiConfig";
import { Button } from "../Components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { DialogContext } from "../context/dialog.context";
import { getDiscountedPrice } from "../helpers";
import { toast } from "sonner";
import { addToCart as addToCartSlice, updateCart } from "../store/features/cart/cartSlice";

const PdpPage = () => {
  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { Name, Price, discount, Image, category, Description } =
    productDetails?.attributes || {};
  const userData = useSelector((state) => state.user.user);
  const cartData = useSelector((state) => state.cart.cart);
  const { setOpenDialog, setOpenCart } = useContext(DialogContext);

  const { slug } = useParams();

  const getProductDetails = async (slug) => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await appAxios.get("/dishes", {
        params: {
          "filters[slug][$contains]": slug,
          populate: "*",
        },
      });
      setProductDetails(data?.[0]);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails(slug);
  }, [slug]);

  const discountedPrice = getDiscountedPrice(Price, discount);

  if (loading) {
    return <div className="h-[500px]">please wait fetching info.........</div>;
  }

  if (!productDetails) {
    return <>somenthing went wrong</>;
  }

  const addToCart = async () => {
    if (!userData?.email) {
      setOpenDialog(true);
      return;
    }

    const isDishAlreadyInCart = Object.values(cartData)?.filter(
      (dish) => dish.dishId == productDetails?.id
    );


    if (isDishAlreadyInCart?.length > 0) {
      const updatedQuantity = (isDishAlreadyInCart[0].quantity) + 1
      await appAxios
        .put(`/carts/${isDishAlreadyInCart?.[0]?.cartId}`, {
          data: {
            quantity: updatedQuantity,
            amount: discountedPrice * updatedQuantity,
            userID: userData?.id,
          },
        }).then((cartData) => {
          const cartId = cartData?.data?.data?.id
          dispatch(
            updateCart({
              cartId,
              attributes: { ...cartData?.data?.data?.attributes, dishId: productDetails?.id, cartId: cartData?.data?.data?.id }
            })
          );


          toast("updated cart!!");
          setOpenCart(true);
        }).catch(() => toast("something went wrong"));
    } else {
      await appAxios
        .post("/carts", {
          data: {
            quantity: 1,
            amount: discountedPrice,
            dishes: productDetails?.id,
            userID: userData?.id,
            users_permissions_user: userData?.id,
          },
        })
        .then((cartData) => {
          toast("added to cart");
          setOpenCart(true);

          dispatch(
            addToCartSlice({
              id: cartData?.data?.data?.id,
              data: { ...cartData?.data?.data?.attributes, dishId: productDetails?.id, cartId: cartData?.data?.data?.id },
            })
          );
        })
        .catch(() => toast("something went wrong"));
    }


  };

  return (
    <div>
      <div className="flex m-auto md:max-w-[80%] flex-col md:flex-row  p-6 gap-16 ">
        <div>
          <img
            src={Image?.data?.[0]?.attributes?.url}
            alt={Name}
            className="w-[500px] h-[350px]"
          />
        </div>
        <div>
          <h2 className="text-3xl">
            {Name}{" "}
            <span className="text-xl">
              ({category?.data?.attributes?.name})
            </span>
          </h2>

          <h3 className="text-2xl pt-4">{Description}</h3>

          <h2 className="text-3xl text-green-700 py-4">
            ₹{discountedPrice}/-{" "}
            <span className="text-xl text-red-800 line-through">₹{Price}</span>{" "}
            <span className="text-xl text-white">{discount}%off</span>{" "}
          </h2>
          <label htmlFor="cars">Select serving:</label>

          <select name="cars" id="cars" className="dark:bg-slate-600 p-2 mb-4">
            <option value="full">full</option>
            <option value="half">half</option>
          </select>

          <br />

          <Button onClick={addToCart}>Add to cart</Button>
        </div>
      </div>
      related dishes
    </div>
  );
};

export default PdpPage;
