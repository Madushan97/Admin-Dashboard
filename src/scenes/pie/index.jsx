import PieChart from "../../components/PieChart"
import { Box } from "@mui/material"
import Header from "../../components/Header"

const Pie = () => {

    return (
        <Box m="20px">
            <Header title="Pie CHART" subtitle="Simple pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;