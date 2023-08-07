import { Box, Container, Heading, Img, Stack } from "@chakra-ui/react";
import React from "react";
import img1 from "/images/amazonHero.jpg";
import img2 from "/images/footwear2.jpg";
import img3 from "/images/home3.jpg";
import img4 from "/images/watches4.jpg";
import img5 from "/images/outdoor5.jpg";
import img6 from "/images/household6.jpg";
import img7 from "/images/keyboard7.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainCarousel = () => {
  return (
    <>
           
        <Carousel
          autoPlay
          dynamicHeight
          showStatus={false}
          emulateTouch
          infiniteLoop
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          width={'100vw'}
        >
          <Box>
            <img src={img1} />
          </Box>
          <Box>
            <img src={img2}  />
          </Box>
          <Box>
            <img src={img3}  />
          </Box>
          <Box>
            <img src={img4}  />
          </Box>
          <Box>
            <img src={img5}  />
          </Box>
          <Box>
            <img src={img6}  />
          </Box>
          <Box>
            <img src={img7}  />
          </Box>
        </Carousel> 
      </>
  );
};

export default MainCarousel;
