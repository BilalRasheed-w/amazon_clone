import {
  Box,
  Container,
  HStack,
  Heading,
  Img,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import img1 from "/images/main carousel/amazonHero.jpg";
import img2 from "/images/main carousel/footwear2.jpg";
import img3 from "/images/main carousel/home3.jpg";
import img4 from "/images/main carousel/watches4.jpg";
import img5 from "/images/main carousel/outdoor5.jpg";
import img6 from "/images/main carousel/household6.jpg";
import img7 from "/images/main carousel/keyboard7.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Offers from "./Offers";
import TodayDeals from "./TodayDeals";

const MainCarousel = () => {
  return (
    <>
      <Stack w={"100vw"}  position={"relative"} height={'180vh'}  >
        <Carousel
          autoPlay
          dynamicHeight
          showStatus={false}
          emulateTouch
          infiniteLoop
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          width={"full"}
        >
          <Box>
            <img src={img1} />
          </Box>
          <Box>
            <img src={img2} />
          </Box>
          <Box>
            <img src={img3} />
          </Box>
          <Box>
            <img src={img4} />
          </Box>
          <Box>
            <img src={img5} />
          </Box>
          <Box>
            <img src={img6} />
          </Box>
          <Box>
            <img src={img7} />
          </Box>
        </Carousel>
      <Offers />
      </Stack>
      <TodayDeals />

    </>
  );
};

export default MainCarousel;
