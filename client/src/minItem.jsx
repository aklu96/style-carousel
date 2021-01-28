import React from 'react';
import styled from 'styled-components';

const MinImg = styled.img`
  border-radius: 20%;
  top: 300px;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.2);
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckMark = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 12px;
  width: 6px;
  border-bottom: 4px solid #ffff;
  border-right: 4px solid #ffff;
`;

const CheckWrapper = styled.button`
  display: flex;
  outline: none;
  top: 1187px;
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
  }
  return (
    <div>
      <MinImg src={url} onClick={() => { miniNav(i); }} />
    </div>
  );
};

export default MinItem;
