import { Container } from "@mui/material";
import poster from "../images/posterImage.png";

export default function Poster(){
    return(
        <Container disableGutters maxWidth="xl" sx={{backgroundColor:"orange"}}>
            <img style={{width:"100%"}} src={poster} placeholder="poster image" />
        </Container>
    )
}