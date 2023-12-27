import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Search from "../pages/Search"
import  NavBar from "../components/NavBar"
import { Container } from "@mui/material"

const AppRoutes = () => {
    return (
        <div>
            <NavBar />
            <Container style={{ marginTop: 120 }}>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="search" Component={Search} />
                </Routes>
            </Container>

        </div>
    )
}

export default AppRoutes