import React from 'react';
import styled from 'styled-components';

const MinImg = styled.img`
  border-radius: 20%;
  top: 300px;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckMark = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 20px;
  width: 10px;
  border-bottom: 7px #ffff;
  border-right: 7px #ffff;
  border-width: 7px;
  border-color: 7px;
`;

const CheckWrapper = styled.button`
  display: flex;
  outline: none;
  top: 126%;
  position: absolute;
  border-width: 0px;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  background-color: #000000;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
`;

const MinItem = ({ style, selected, miniNav, i }) => {
  let { url } = style;
  console.log(selected.url);
  if (url === selected.url) {
    return (
      <SelectWrapper>
        <CheckWrapper><CheckMark /></CheckWrapper>
        <MinImg src={url} onClick={() => { miniNav(i); }} />
      </SelectWrapper>
    );
  } else {
    return (
      <div>
        <MinImg src={url} onClick={() => { miniNav(i); }} />
      </div>
    );
  }
};

export default MinItem;
