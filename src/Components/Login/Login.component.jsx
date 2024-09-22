import CustomButton from "../Buttons/Button.component"

function LoginComponent() {
    return (
        <section className="text-gray-600 body-font" data-aos="fade-up">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          
          <div className="lg:w-[100%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center">Register</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="cPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
              <input type="password" id="cPassword" name="cPassword" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
           <CustomButton title="Login" variant="primary" onClick={()=>{alert("hello")}}/>
            <p className="text-xs text-gray-500 mt-3">Probabily you are miising out if you have not yet registered with Us</p>
          </div>
        </div>
      </section>
    )
}

export default LoginComponent