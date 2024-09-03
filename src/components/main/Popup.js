import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../../asset/banner.png";
import mimg from "../../asset/mobilebanner.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Content = styled.div`
  width: 75vw;
  height: 70vh;
  position: relative;
  top: -20vh;
  background: #111;
  padding: 20px;
  padding-left: 5vw;
  border-radius: 5px;
  text-align: center;
  z-index: 10;
  border-radius: 20px;
  h2 {
    font-size: 20px;
    color: #fff;
  }
`;

const Img = styled.div`
  width: 70vw;
  height: 55vh;
  margin-top: 15px;
  background-image: url("${img}");
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 600px) {
    background-image: url("${mimg}");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const ClosedBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: none;
  background: #ff723a;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  &:hover {
    color: #ff723a;
    background: #fff;
  }
  @media (max-width: 600px) {
    font-size: 4.5vw;
  }
`;

const Popup = ({ isVisible, onClose }) => {
  useEffect(() => {
    const today = new Date().toDateString();
    const lastClosedDate = localStorage.getItem("popupClosedDate");

    if (lastClosedDate === today) {
      onClose(); // 오늘 이미 닫힌 상태라면 팝업을 숨깁니다.
    }

    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible, onClose]);

  const handleClose = () => {
    const today = new Date().toDateString();
    localStorage.setItem("popupClosedDate", today); // 현재 날짜를 저장합니다.
    onClose();
  };

  if (!isVisible) return null;
  return (
    <Container>
      <Content className="popup-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Braindeck Notice</h2>
          <ClosedBtn onClick={handleClose}>X</ClosedBtn>
        </div>
        <Img />
      </Content>
    </Container>
  );
};

export default Popup;
