import { Route, Routes } from "react-router-dom"
import { Episodes, Home, Locations } from "../pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/episodes" Component={Episodes} />
            <Route path="/locations" Component={Locations} />
        </Routes>
    )
}

export default AppRoutes