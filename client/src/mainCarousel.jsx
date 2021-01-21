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

const Row = styled.div`
  display: flex;
  overflow: hidden;
`;

const ButtonWrapper = styled.button`
  display: flex;
  position: absolute;
  flex-basis: fit-content;
  top: 60%;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  background-color: #fff;
  border-radius: 50%;
  transition: background-color .2s cubic-bezier(.235,0,.05,.95),box-shadow .2s ease-in-out;
  z-index: 9;
`;

const ArrowLeft = styled.div`
  border-radius: 30px;
  position: relative;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
`;

const MainCarousel = ({ name, focus }) => (
  <div>
    <Prod>{ name }</Prod>
    <Row>
      <ButtonWrapper><ArrowLeft><svg viewBox="0 0 10.5 16.2" aria-labelledby="icon--chevron-left-desc icon--chevron-left-title" id="icon--chevron-left" xmlns="http://www.w3.org/2000/svg"><title id="icon--chevron-left-title">chevron left</title><desc id="icon--chevron-left-desc">chevron left</desc><path d="M1.7 10.2l5.7 5.7c.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4L8.8.3c-.4-.4-1-.4-1.4 0L.3 7.4c-.4.4-.4 1 0 1.4l1.4 1.4z"></path></svg></ArrowLeft></ButtonWrapper>
      {focus.map((product, index) => <Item product={product} index={index} />)}
    </Row>
  </div>
);

export default MainCarousel;
