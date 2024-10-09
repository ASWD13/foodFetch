import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home.page'
import PdpPage from '../Pages/pdp.page'
import ContactPage from '../Pages/contact.page'
import NotFoundPage from '../Pages/notFound.page'
import RestaurantPage from '../Pages/restaurant.page'
import CategoriesPage from '../Pages/categories.page'

const RootRouting = () => {
    return (
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/product/:slug" Component={PdpPage} />
            <Route path="/restaurant/:slug" Component={RestaurantPage} />
            <Route path="/contact-us" Component={ContactPage} />
            <Route path="/categories" Component={CategoriesPage} />
            <Route path="/*" Component={NotFoundPage} />
        </Routes>
    )
}

export default RootRouting