import { Box, Container, Typography } from "@mui/material";
import image from '../images/softdrinks.png'
import { useLayoutEffect, useRef } from "react";
import frootiLifeBGImg from "../images/frootiLife-BgImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About(){
    const refer = useRef();

    useLayoutEffect(()=>{
        const ctx = gsap.context((self) => {
            const box1  = self.selector('#rotatingImg');
            const box2 = self.selector('#rotatingImg-wrap')
              gsap.to(box1, {
                rotateZ: 900,
                scrollTrigger: {
                  trigger: box1,
                  start: box2,
                  scrub: 1,
                },
              });
          
      }, refer);
      return () => ctx.revert(); // <- Cleanup!
    },[])

    return(
        <Container disableGutters maxWidth='xl'
           sx={{
            display: {base:'flex',xs:'block',md:'flex', lg:'flex'},
            textAlign: "center",
            }}>
            <Box id="rotatingImg-wrap" ref={refer} sx={{
                height:{base:'auto',xs:'40vh',md:'auto',lg:'auto'},
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                fontSize:'xx-large',
                backgroundColor: "orange",
                width: {base:'50%',xs:"100%",md:'50%', lg:"50%"},
                fontWeight:'bold',
                color:"green",
                }}>
                <Box  sx={{
                    position:'relative',
                    top:'20%',
                    width:{base:'30%',xs:'30%',md:'40%',lg:"50%"},
                    heigth:"60%",
                    margin:"auto",
                }}>
                <img style={{
                    margin:'auto',
                    width:"100%"
                }} 
                id="rotatingImg" src={frootiLifeBGImg} placeholder="rotating image"/>

              </Box>
              <Typography sx={{
                fontSize :{xs:'50px',md:'60px',lg:'75px'},
                fontWeight: 'bold',
                color: 'whitesmoke',
                position : 'relative',
                width:"90%",
                top:'-30%',
              }}>Live the Frooti Life</Typography>

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