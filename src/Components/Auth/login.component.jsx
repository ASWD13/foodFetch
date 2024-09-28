import { useState } from "react"
import { appAxios } from "../../utils/apiConfig"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { CgSpinner } from "react-icons/cg"

export const LoginComponent = () => {

    const [formValues, setFormValues] = useState({
        identifier: "",
        password: "",
    })

    const [loading, setLoading] = useState(false)

    const handleInput = (event) => {

        setFormValues((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value

            }
        })
    }

    const loginUser = async () => {
        try {
            setLoading(true)
            const { data } = await appAxios.post("/auth/local",

                {
                    identifier: formValues.identifier,
                    password: formValues.password

                }
            );
            toast("Hyyooo you have been logged in!!!")
            localStorage.setItem("jwt", data.jwt)
            console.log('data: ', data.jwt);

        } catch (error) {
            console.log('error: ', error);
            toast("smthing went wrong!!!")

        } finally {
            setLoading(false)
        }


    };

    return (
        <div className="container px-5  mx-auto flex flex-wrap items-center">
            <div className="lg:w-[100%]  rounded-lg flex flex-col md:ml-auto w-full">

                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input onChange={(e) => handleInput(e)} type="email" id="email" value={formValues.identifier} name="identifier" className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input onChange={(e) => handleInput(e)} type="password" value={formValues.password} id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                <Button className="text-white" size="lg" disabled={loading} onClick={() => { loginUser() }}>Login

                    {loading && <CgSpinner className=" animate-spin" size="24" />}

                </Button>
            </div>
        </div>
    )
}