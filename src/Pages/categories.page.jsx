import { useEffect, useState } from "react"
import { appAxios } from "../utils/apiConfig"
import { Button } from "../Components/ui/button";
import DishCard from "../Components/card/hotel.card";

const CategoriesPage = () => {
    const [category, setCategory] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [dishes, setDishes] = useState([])

    const getCategoryDetails = async () => {

        try {
            setLoading(true)
            const { data } = await appAxios.get("/categories")
            setCategory(data?.data)
            setActiveCategory(data?.data?.[0]?.attributes?.name)
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setLoading(false)
        }

    }



    useEffect(() => {
        getCategoryDetails()
    }, [])


    const getDishesByCategory = async (category) => {

        const { data } = await appAxios.get("/dishes", {
            params: {
                "filters[category][name][$eqi]": category,
                "populate": "deep"
            }
        })
        setDishes(data?.data)
    }

    useEffect(() => {
        getDishesByCategory(activeCategory)


    }, [activeCategory])







    const selectCategory = (category) => {
        setActiveCategory(category)
    }


    return (
        <div className=" flex flex-col md:flex-row gap-5 my-5">
            <div className="flex flex-row md:flex-col  w-1/5 py-10">
                {!loading ? category?.map(cat => {
                    return <Button onClick={() => selectCategory(cat?.attributes?.name)} key={cat?.id} variant={cat?.attributes?.name == activeCategory ? "default" : "ghost"} className="text-2xl">{cat?.attributes?.name}</Button>
                }) : "loading"}
            </div>

            <div className="w-full flex flex-wrap justify-center ">

                {dishes?.map(dish => {

                    return <DishCard key={dish?.id} singleDish={dish} />
                })}
            </div>

        </div>
    )
}

export default CategoriesPage