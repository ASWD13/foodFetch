import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appAxios } from "../utils/apiConfig";
import { Button } from "../Components/ui/button";
import { useSelector } from "react-redux";

const PdpPage = () => {
  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false)

  const { Name, Price, discount, Image, category, Description } =
    productDetails?.attributes || {};
  const userData = useSelector((state) => state.user)
  console.log('userData: ', userData);


  const { slug } = useParams();

  const getProductDetails = async (slug) => {
    try {
      setLoading(true)
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
      setLoading(false)
    }
  };

  useEffect(() => {
    getProductDetails(slug);
  }, [slug]);

  const discountedPrice = Price - (Price * discount) / 100;
  console.log("discountedPrice: ", discountedPrice);

  if (loading) {

    return <div className="h-[500px]">please wait fetching info.........</div>
  }

  if (!productDetails) {

    return <>somenthing went wrong</>
  }

  const addToCart = async () => {

    const data = await appAxios.post("/carts", {
      data: {
        quantity: 1,
        amount: discountedPrice,
        dishes: productDetails?.id,
        userID: userData?.user?.id

      }
    })
    console.log('data: ', data.data);
  }


  return (
    <div>
      <div className="flex m-auto md:max-w-[80%] flex-col md:flex-row  p-6 gap-16 ">
        <div >
          <img
            src={Image?.data?.[0]?.attributes?.url}
            alt={Name}
            className="w-[500px] h-[350px]"
          />
        </div>
        <div>
          <h2 className="text-3xl">
            {Name}{" "}
            <span className="text-xl">({category?.data?.attributes?.name})</span>
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

          <Button onClick={addToCart} >Add to cart</Button>
        </div>
      </div>

      related dishes
    </div>
  );
};

export default PdpPage;
