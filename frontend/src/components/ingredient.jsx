import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ingredient.module.css';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import frootiLife from '../images/liveTheFrootiLife.jpg';

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

    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <Container disableGutters 
    maxWidth="xl"
    sx={{
      display:{xs:"block",lg:'flex'},
      justifyContent:"center",
      alignItems:"center",
      }}>

<Box sx={{
       width:"50%"
      }}>
        <List>
          <Typography>The drink contains :</Typography>
          <ListItem>Mango Pulp</ListItem>
          <ListItem>Water</ListItem>
          <ListItem>Citric Acid</ListItem>
          <ListItem>Ascorbic Acid</ListItem>
          <ListItem>Salt</ListItem>
          <ListItem>Sugar</ListItem>
          <ListItem>Colouring ang Flavouring</ListItem>
        </List>
      </Box>
    
      <Box
      disableGutters
      sx={{
        width:"50%",
        padding:"3% 0%",
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
        <Box id="box" className={styles.box}>Tasty</Box>
        <Box id="box" className={styles.box}>Rich in Vitamin C</Box>
        <Box id="box" className={styles.box}>Good source of energy</Box>
      </Box>

    </Container>
  );
}
