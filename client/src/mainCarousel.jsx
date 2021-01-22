import React from 'react';
import styled from 'styled-components';
import Item from './item';

const Prod = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  display: flex;
  justify-content: center;
  font-size: 50px;
  line-height: 48.5px;
`;

const Slider = styled.div`
  display: flex;
  position: absolute;
  width: fit-content;
  transition: transform .4s ease-in;
  transform: translateX(-${
  (props) => {
    const rotate = 800 * props.index;
    return rotate + 300;
  }
}px);
`;

const Row = styled.div`
  display: flex;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const LeftArrowWrapper = styled.button`
  display: flex;
  position: absolute;
  outline: none;
  border-width: 0px;
  top: 500px;
  left: 20px;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
`;

const RightArrowWrapper = styled.button`
  display: flex;
  position: absolute;
  outline: none;
  border-width: 0px;
  top: 500px;
  left: 96%;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
`;

const ArrowLeft = styled.div`
  border: solid black;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  z-index: 3;
`;

const ArrowRight = styled.div`
  border: solid black;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  z-index: 3;
`;

const MainCarousel = ({ name, styles, navRight, navLeft, index, direction }) => (
  <div>
    <Prod>{ name }</Prod>
    <LeftArrowWrapper onClick={navLeft}><ArrowLeft /></LeftArrowWrapper>
    <RightArrowWrapper onClick={navRight}><ArrowRight /></RightArrowWrapper>
    <Row>
      <Slider index={index} direction={direction}>
        {styles.map((style) => <Item style={style} />)}
      </Slider>
    </Row>
  </div>
);

export default MainCarousel;
