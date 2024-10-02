import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home.page'
import PdpPage from '../Pages/pdp.page'

const RootRouting = () => {
    return (
        <Routes>
            <Route path="/product/:slug" Component={PdpPage} />
            <Route path="/" Component={HomePage} />
        </Routes>
    )
}

export default RootRouting