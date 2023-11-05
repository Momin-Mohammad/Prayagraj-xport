import { Container } from "@mui/material";

export default function Poster({image}){
    return(
        <Container disableGutters maxWidth="xl" sx={{backgroundColor:"orange"}}>
            <img style={{width:"100%"}} src={image} placeholder="poster image" />
        </Container>
    )
}