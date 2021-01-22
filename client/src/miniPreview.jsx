import React from 'react';
import styled from 'styled-components';
import MinItem from './minItem';

const Row = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 1000px;
  width: 100%;
  height: 100%;
`;

const MiniPreview = ({ itemCopy }) => {
  return(
    <Row>
      {itemCopy.map((style) => <MinItem style={style} />)}
    </Row>
  );
};

export default MiniPreview;
