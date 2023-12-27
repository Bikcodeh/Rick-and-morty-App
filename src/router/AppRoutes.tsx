import { Route, Routes } from "react-router-dom"
import { Home, Search } from "../pages"
import { NavBar } from "../components"
import { Container } from "@mui/material"

const AppRoutes = () => {
    return (
        <div>
            <NavBar />
            <Container fixed style={{ marginTop: 120 }}>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="search" Component={Search} />
                </Routes>
            </Container>

        </div>
    )
}

export default AppRoutes