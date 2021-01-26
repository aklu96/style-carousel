import React from 'react';
import styled from 'styled-components';

const CImg = styled.img`
  width: 900px;
  height: 900px;
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.1);
  }
`;

const Item = ({ style, selected }) => {
  const { url } = style;
  return (
    <CImg src={url} alt="Product" />
  );
};

export default Item;
