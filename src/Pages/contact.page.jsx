


import { Button } from "../Components/ui/button";
const ContactPage = () => {
  return (
    <div className="flex  p-8">


      <div className="w-1/2  ">

        <img src="https://i.ibb.co/wyFQLdW/Screenshot-2024-10-06-213152.jpg" alt="contact us img" className="w-[500px]  object-cover h-[400px]" />

      </div>
      <div className="w-1/2">


        <h2 className="text-3xl text-center">Contact Us</h2>

        <form className="flex justify-center flex-col">


          <input placeholder="email" type="email" className=" text-black p-2 m-2 rounded focus:outline-none w-1/2 " onChange={() => {

          }} />


          <textarea id="w3review" name="w3review" rows="4" placeholder="your query" cols="50" className=" text-black rounded-md" />


          <Button className="w-1/4 my-5">Submit</Button>


        </form>

      </div>
    </div>
  )
}

export default ContactPage