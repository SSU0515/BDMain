import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MiddleMotion from "./MiddleMotion";
import img from "../../asset/contact.png";
import logoBg from "../../asset/LogoMark.png";
import imgM from "../../asset/Mcontact.png";

const Container = styled.div`
  width: 100vw;
  height: 300vh;
  overflow: hidden;
  margin-top: 450px;
  position: relative;
  @media (max-width: 600px) {
    height: 200vh;
    margin-top: 400px;
  }
`;
const ImgM = styled(motion.img)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 140%;
    position: absolute;
    bottom: 50%;
    left: -20%;
  }
`;
const Img = styled(motion.img)`
  position: absolute;
  top: 120vh;
  left: 15vw;
  width: 70vw;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Img2 = styled(motion.img)`
  position: absolute;
  top: 30vh;
  left: 35vw;
  width: 30vw;
  @media (max-width: 600px) {
    width: 60vw;
    top: 0;
    left: 20vw;
    padding-top: 80px;
  }
`;


const Title = styled(motion.h2)`
  position: absolute;
  top: 50vh;
  left: 0;
  width: 100vw;
  font-size: 2.8vw;
  font-weight: 600;
  color: #fff;
  text-align: center;
  @media (max-width: 600px) {
    top: 20vh;
    font-size: 16px;
  }
`;
const MidTitle = styled(motion.h2)`
  position: absolute;
  top: 55vh;
  left: 0;
  width: 100vw;
  margin-top: 60px;
  font-size: 1.5vw;
  font-weight: 400;
  color: #fff;
  text-align: center;
  @media (max-width: 600px) {
    top: 25vh;
    font-size: 14px;
    margin-top: 10px;
  }
`;



function Bottom() {
  return (
    <Container>
      <MiddleMotion />

      <Img2 src={logoBg} alt="logoBg" />
      <Title
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
      >
        우리는 AI를 통해 인간의 커뮤니케이션을 돕습니다 .
      </Title>
      <MidTitle
        initial={{ opacity: 0, x: 200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        }}
      >
        "Empowering Human Connection: Enhancing Communication through AI"
      </MidTitle>
      <Img
        initial={{ opacity: 0, y: -200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
        src={img}
        alt="img"
      />
      <ImgM src={imgM} alt="imgM" />

    </Container>
  );
}

export default Bottom;
