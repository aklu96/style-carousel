import React from 'react';
import styled from 'styled-components';

const CImg = styled.img`
  width: 800px;
  height: 800px;
`;

const Item = ({ style, selected }) => {
  const { url } = style;
  return (
    <div>
      <CImg src={url} alt="Product" />
    </div>
  );
};

export default Item;
