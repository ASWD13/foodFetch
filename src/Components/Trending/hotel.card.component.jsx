/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HotelCardComponent = ({ hotelData }) => {
    const { Name, Rating, Description, Address, Image: data, slug } = hotelData;
    return (
        <Link className="border border-primary w-[250px] p-2" data-aos="zoom-in" to={"/restaurant/" + slug}>
            <img
                src={
                    data?.data?.[0]?.attributes?.url ||
                    "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
                }
                alt=""
                className="w-[250px] h-[200px] object-cover"
            />
            <p>{Name}</p>
            <p>{Description}</p>
            <p>{Address}</p>
            <p>⭐{Rating}/5</p>
        </Link>
    );
};

export default HotelCardComponent;
