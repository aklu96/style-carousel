import React from 'react';
import styled, { withTheme } from 'styled-components';
import MinItem from './minItem';
import Description from './description';

const MinWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SizeButton = styled.button`
  display: flex;
  position: relative;
  border-color: black;
  border-width: 4px;
  outline: none;
  margin: 3px;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  background-color: #ffff;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
  &:focus {
    background-color: #f69e83;
    color: solid white;
  };
  &:hover {
    background-color: #f69e83;
    color: solid white;
  }
`;

const SizeText = styled.div`
  color: black;
  font-family: 'Roboto', sans-serif;
  font-weight: bold 900;
  justify-content: center;
  font-size: 16px;
  line-height: 16x;
  cursor: pointer;
  &:focus {
    color: solid white;
  }
`;

const ATBWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

const ATB = styled.button`
  width: 318px;
  height: 56px;
  border-radius: 30px;
  outline: none;
  background-color: #fa4616;
  border: none;
  color: #ffff;
  font-family: 'Roboto', sans-serif;
  font-weight: bold 900;
  justify-content: center;
  font-size: 16px;
  line-height: 16x;
  cursor: pointer;
`;

const MiniPreview = ({ selected, miniNav, clicked, toggleClicked, currentItemCopy }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let added = 'Add to Bag';
  if (clicked) {
    added = 'Added';
  }
  return (
    <MinWrap>
      <Desc>
        <Description selected={selected} />
      </Desc>
      <Row>
        {currentItemCopy.map((style, i) => <MinItem style={style} selected={selected} miniNav={miniNav} i={i} />)}
      </Row>
      <Row>
        {sizes.map((size, i) => <SizeButton onclick={() => { chooseSize(i) }} size={size} i={i} ><SizeText>{sizes[i]}</SizeText></SizeButton>)}
      </Row>
      <ATBWrapper><ATB onClick={toggleClicked}>{added}</ATB></ATBWrapper>
    </MinWrap>
  );
};

export default MiniPreview;
