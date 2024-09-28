/* eslint-disable react/prop-types */


const HotelCardComponent = ({ hotelData }) => {
    console.log('hotelData: ', hotelData);
    const { Name, Rating, Description, Address, Image: data } = hotelData
    console.log('data: ', data?.data?.[0]?.attributes?.url);
    return (
        <div className="border border-primary w-[250px] p-2 " data-aos="flip-up">
            <img src={data?.data?.[0]?.attributes?.url || "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="} alt="" className="w-[250px] h-[200px] object-cover" />
            <p>{Name}</p>
            <p>{Description}</p>
            <p>{Address}</p>
            <p> {Rating}/5</p>

        </div>
    )
}

export default HotelCardComponent