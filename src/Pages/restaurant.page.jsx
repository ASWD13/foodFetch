/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { appAxios } from "../utils/apiConfig";
import CustomTitle from "../Components/ui/customTitle.component";
import DishCard from "../Components/card/hotel.card";

const RestaurantPage = () => {
    const [loading, setLoading] = useState(false);
    const [restaurantDetails, setRestaurantDetails] = useState();

    const { Name, Description, city, dishes, Image } =
        restaurantDetails?.attributes || {};

    const { slug } = useParams();

    const getRestrautsDetails = async (slug) => {
        try {
            setLoading(true);
            const {
                data: { data },
            } = await appAxios.get("/restaurants", {
                params: {
                    "filters[slug][$eqi]": slug,
                    populate: "deep",
                },
            });
            setRestaurantDetails(data?.[0]);
        } catch (error) {
            console.log("error: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRestrautsDetails(slug);
    }, [slug]);

    if (loading) {
        return <>restaurant details are loading....</>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <CustomTitle title={Name} />

            <img
                src={
                    Image?.data?.[0]?.attributes?.url ||
                    "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
                }
                alt=""
                className="w-[550px] h-[400px] object-cover rounded-lg"
            />

            <CustomTitle title={"Featured Dishes"} />


            <div className="flex flex-wrap gap-4">
                {dishes?.data?.map((singleDish) => {

                    return <DishCard key={singleDish?.id} singleDish={singleDish} />
                })}
            </div>
        </div>
    );
};

export default RestaurantPage;
