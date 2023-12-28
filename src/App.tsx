import { Container } from "@mui/material"
import { NavBar } from "./components"
import AppRoutes from "./router/AppRoutes"

const App = () => {
  return (
    <div>
    <NavBar>
        <Container fixed style={{ marginTop: 120 }}>
            <AppRoutes />
        </Container>
    </NavBar>
</div>
  )
}

export default App
