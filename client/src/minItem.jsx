import React from 'react';
import styled from 'styled-components';

const MinImg = styled.img`
  border-radius: 20%;
  top: 300px;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const MinItem = ({ style, selected }) => {
  let { url } = style;
  return (
    <div>
      <MinImg src={url} />
    </div>
  );
};

export default MinItem;
