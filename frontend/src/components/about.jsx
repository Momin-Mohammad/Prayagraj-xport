import { Box, Container, Typography } from "@mui/material";
import image from '../images/softdrinks.png'

export default function About(){
    return(
        <Container disableGutters maxWidth='xl'
           sx={{
            display: {base:'flex',xs:'block',md:'flex', lg:'flex'},
            textAlign: "center",
            }}>
            <Box sx={{
                height:{base:'auto',xs:'60vh',md:'auto',lg:'auto'},
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:'xx-large',
                backgroundColor: "orange",
                width: {base:'50%',xs:"100%",md:'50%', lg:"50%"},
                fontWeight:'bold',
                color:"green",
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "50% 70%",
                backgroundPosition: "center",
                }}>
              Mango FROOTI, Fresh And Juicy
            </Box>
            <Box sx={{
                width: {base:'50%',xs:"100%",md:'50%', lg:"50%"}
                }}>
                <Typography sx={{p:'7%', lineHeight:2}}>
                The love story between Frooti and India began in 1985. Today, Frooti rules the hearts of millions of mango lovers around the world. Just a swig of the rich and juicy Frooti is akin to the joyful experience of slurping on the real king of fruits. Made with real mango pulp from the freshest of mangoes, Frooti satisfies the craving for this popular seasonal fruit throughout the year. It’s juicy and flavourful mango taste not just rejuvenates the taste buds, but is the perfect thirst-quencher that refreshes you in no time.

Led by innovation, Frooti is the first drink to disrupt the beverage market in India with many “firsts”. Frooti was the first brand to be introduced in Tetra Pak in India, pioneering the concept of ‘on-the-go’. It was the first brand to unveil the PET bottle and TCA Tetra Pak as well. With these unique innovations in packaging, Parle Agro kept India’s popular mango drink fresh and accessible to consumers across India.

Frooti available in 65ml, 125ml, and 200ml Carton Pack and also in PET bottles of 125ml, 250ml, 300ml, 600ml, 1Ltr, and 1.8Ltr PET.
                </Typography>
            </Box>
        </Container>
    )
}