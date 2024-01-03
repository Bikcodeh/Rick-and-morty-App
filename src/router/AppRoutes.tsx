import { Route, Routes } from "react-router-dom"
import { Episodes, Home, Locations, Character } from "../pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/episodes" Component={Episodes} />
            <Route path="/locations" Component={Locations} />
            <Route path="/character/:id" Component={Character} />
        </Routes>
    )
}

export default AppRoutes