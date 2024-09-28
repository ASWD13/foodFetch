import axios from "axios";
import { LOCATION_URL } from "../constants/apiUrls";

export const getUserLocation = async (setLocation) => {

    await navigator.geolocation.getCurrentPosition((data) => {
        axios
            .request({
                method: "get",
                url: `${LOCATION_URL}location/pincode?lat=${data.coords.latitude}&long=${data.coords.longitude}`,
            })
            .then((response) => {
                setLocation(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })
};
