import { Route, Routes } from "react-router-dom"
import { Episodes, Home, Locations } from "../pages"
import { NavBar } from "../components"
import { Container } from "@mui/material"

const AppRoutes = () => {
    return (
        <div>
            <NavBar>
                <Container fixed style={{ marginTop: 120 }}>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/episodes" Component={Episodes} />
                        <Route path="/locations" Component={Locations} />
                    </Routes>
                </Container>
            </NavBar>
        </div>
    )
}

export default AppRoutes