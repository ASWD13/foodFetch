/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const CustomButton = ({title,onClick,variant,style,rightIcon}) => {


const [variantStyle, setVariantStyle] = useState()


useEffect(() => {
    switch (variant) {
        case "primary":
            setVariantStyle("bg-orange-800 hover:bg-orange-800 ")
            break;

        case "secondary":
            setVariantStyle(" hover:bg-orange-800 hover:text-white text-slate-900 bg-gray-300")
            break;
    
        default:
            setVariantStyle("bg-orange-800 hover:bg-orange-800 ")
            break;
    }
  
}, [])


  return (
    <button onClick={onClick}  className={`text-white border-0 py-2 px-1 focus:outline- rounded text-lg outline-slate-300 ${variantStyle} ${style}`}>
      
    <div className="flex items-center justify-center">
    {title}
    {rightIcon}
    </div>
      
      
      </button>
  )
}

export default CustomButton