import { useState } from "react"
import { Button } from "../ui/button"
import { appAxios } from "../../utils/apiConfig"
import { toast } from "sonner"
import { CgSpinner } from "react-icons/cg"


function LoginComponent() {


  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: ""
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


  const registerUser = async () => {
    try {
      setLoading(true)
      const { data } = await appAxios.post("/auth/local/register",

        {
          username: formValues.username,
          email: formValues.email,
          password: formValues.password

        }
      );
      toast("Hyyooo you have been registered!!!")
      console.log('data: ', data);

    } catch (error) {
      console.log('error: ', error);
      toast("smthing went wrong!!!")

    } finally {
      setLoading(false)
    }


  };


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto flex flex-wrap items-center">
        <div className="lg:w-[100%] md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">UserName</label>
            <input onChange={(e) => handleInput(e)} type="text" id="full-name" value={formValues.username} name="username" className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={(e) => handleInput(e)} type="email" id="email" value={formValues.email} name="email" className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input onChange={(e) => handleInput(e)} type="password" value={formValues.password} id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="cPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
            <input onChange={(e) => handleInput(e)} type="password" value={formValues.cPassword} id="cPassword" name="cPassword" className="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <Button className="text-white" size="lg" disabled={loading} onClick={() => { registerUser() }}>Register


            {loading && <CgSpinner className=" animate-spin" size="24" />}


          </Button>
          <p className="text-xs text-gray-500 mt-3">Probabily you are miising out if you have not yet registered with Us</p>
        </div>
      </div>
    </section>
  )
}

export default LoginComponent