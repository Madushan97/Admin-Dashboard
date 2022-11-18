import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Header from "../../components/Header";
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import { tokens } from "../../theme";

const FAQ = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question Number 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat prede
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question Number 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question Number 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ere are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                        you need to be s
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question Number 4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as oppo
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;