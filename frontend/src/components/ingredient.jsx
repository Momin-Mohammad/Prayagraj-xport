import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ingredient.module.css';
import { Box, Container, List, ListItemText } from '@mui/material';
import frootiLife from '../images/frootiImage.jpg';
import BlurOnIcon from '@mui/icons-material/BlurOn';

gsap.registerPlugin(ScrollTrigger);

export default function Ingredient() {
  const main = useRef();

  useLayoutEffect(() => {

    const ctx = gsap.context((self) => {
      const boxes = self.selector('#box');
      const box1  = self.selector('#box1');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: "105%",
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 60%',
            scrub: true,
          },
        });
      });

      box1.forEach((box) => {
        gsap.to(box, {
          x: "-105%",
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 60%',
            scrub: true,
          },
        });
      });

    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <Container disableGutters 
    maxWidth="xl"
    sx={{
      display:{xs:"flex",lg:'flex'},
      flexDirection:{xs:"column-reverse",lg:"row"},
      gap:{xs:'2%',lg:"0%"},
      justifyContent:"center",
      alignItems:"center",
      padding:"2% 0%"
      }}>
    
      <Box
      disableGutters
      sx={{
        width:{xs:"100%",sm:"100%",lg:"50%"},
        heigth:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        backgroundImage:`url(${frootiLife})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%',
        backgroundPosition:'center',
      }}
       className={styles.GsapScroll_section} ref={main}>
        <Box id="box" className={styles.box}>Mango Pulp</Box>
        <Box id="box1" className={styles.box}>Water</Box>
        <Box id="box" className={styles.box}>Citric Acid</Box>
        <Box id="box1" className={styles.box}>Ascorbic Acid</Box>
        <Box id="box" className={styles.box}>Salt</Box>
        <Box id="box1" className={styles.box}>Sugar</Box>
        <Box id="box" className={styles.box}>Colouring and Flavouring</Box>
      </Box>

      <Box disableGutters sx={{
       width:{sm:"100%",lg:"50%"},
       padding:"2% 0%",
       backgroundColor:'rgb(19, 77, 19)',
       textAlign:'center',
       color:"orange"
      }}>
       <Box> 
        <List sx={{
          fontSize:'larger',
          fontWeight:'bold',
          color:"orange"
        }}>Storage Conditions: </List>

<ListItemText sx={{
   fontSize:'large',
   display: 'flex',
   paddingLeft: "1%",
   justifyContent: 'start',
   gap:'2rem',
   aligItems: 'center',
   color:"orange"
}}><BlurOnIcon sx={{fontSize:'medium', color:"orange"}} />Tastes best when chilled.</ListItemText>
<ListItemText sx={{
fontSize:'large',
display: 'flex',
paddingLeft: "1%",
justifyContent: 'start',
gap:'2rem',
aligItems: 'center',
color:"orange"
}}><BlurOnIcon sx={{fontSize:'medium', color:"orange"}} />Store away from sunlight.</ListItemText>
<ListItemText sx={{
fontSize:'large',
display: 'flex',
paddingLeft: "1%",
justifyContent: 'start',
gap:'2rem',
aligItems: 'center',
color:"orange"
}}><BlurOnIcon sx={{fontSize:'medium', color:"orange"}} />Refrigerate after opening and consume within three days.</ListItemText>
</Box>

<List sx={{
  fontSize:'larger',
  fontWeight:'bold',
}}>Awareness:</List>

<ListItemText sx={{
fontSize:'large',
display: 'flex',
paddingLeft: "1%",
justifyContent: 'start',
gap:'2rem',
aligItems: 'center',
color:"orange"
}}><BlurOnIcon sx={{fontSize:'medium', color:"orange"}} />Shake well before Consuming.</ListItemText>
<ListItemText sx={{
fontSize:'large',
display: 'flex',
paddingLeft: "1%",
justifyContent: 'start',
gap:'2rem',
aligItems: 'center',
color:"orange"
}}><BlurOnIcon sx={{fontSize:'medium', color:"orange"}} />Do not buy if the bottle is leaking or the seal is broken.</ListItemText>
<ListItemText sx={{
fontSize:'large',
display: 'flex',
paddingLeft: "1%",
justifyContent: 'start',
gap:'2rem',
aligItems: 'center',
color:"orange"
}}><BlurOnIcon sx={{fontSize:'medium', color:"orange"}} />Commercial Export of this Pack is Strictly Prohibited, and is Liable for Prosecution.</ListItemText>
      </Box>

    </Container>
  );
}
