import React from 'react';
import styled from 'styled-components';
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
  background-color: #fff;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: bold 900;
  justify-content: center;
  font-size: 16px;
  line-height: 16x;
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

const MiniPreview = ({ itemCopy, selected }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  return(
    <MinWrap>
      <Desc>
        <Description selected={selected} />
      </Desc>
      <Row>
        {itemCopy.map((style) => <MinItem style={style} selected={selected} />)}
      </Row>
      <Row>
        {sizes.map((size, i) => <SizeButton>{sizes[i]}</SizeButton>)}
      </Row>
      <ATBWrapper><ATB>Add to Bag</ATB></ATBWrapper>
    </MinWrap>
  );
};

export default MiniPreview;
