/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getDiscountedPrice } from "../../helpers";

const DishCard = ({ singleDish }) => {
    const discountedPrice = getDiscountedPrice(singleDish?.attributes?.Price, singleDish?.attributes?.discount)

    return (
        <Link
            className="border border-primary w-[250px] p-2 m-4"
            data-aos="zoom-in"
            to={"/product/" + singleDish?.attributes?.slug}
            key={singleDish?.id}
        >
            <img
                src={
                    singleDish?.attributes?.Image?.data?.[0]?.attributes?.url ||
                    "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
                }
                alt=""
                className="w-[230px] h-[200px] object-cover rounded-lg"
            />


            <h2 className="text-3xl">{singleDish?.attributes?.Name}</h2>

            <h2 className="text-2xl text-green-700">
                ₹{discountedPrice}/-{" "}
                <span className="text-xl text-red-800 line-through">₹{singleDish?.attributes?.Price}</span>{" "}
                <span className="text-xl text-white">{singleDish?.attributes?.discount}%off</span>{" "}
            </h2>


        </Link>
    );
}

export default DishCard