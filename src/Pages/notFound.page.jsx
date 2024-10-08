import { Link } from "react-router-dom"
import { Button } from "../Components/ui/button"


const NotFoundPage = () => {
    return (
        <div>NotFoundPage

            hey this is not correct router
            go back to Home

            <Link to={"/"}>
                <Button>go back to Home</Button>

            </Link>
        </div>
    )
}

export default NotFoundPage