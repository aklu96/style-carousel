import React from 'react';
import styled from 'styled-components';
import MinItem from './minItem';
import Description from './description';

const Row = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 1000px;
  width: 100%;
  height: 100%;
`;

const Desc = styled.div`
  display: flex;
  position absolute;
  left: 800px;
  top: 980px;
  width: 100%;
  height: 100%;
`;

const MiniPreview = ({ itemCopy, selected }) => (
  <div>
    <Desc>
      <Description selected={selected} />
    </Desc>
    <Row>
      {itemCopy.map((style) => <MinItem style={style} selected={selected} />)}
    </Row>
  </div>
);

export default MiniPreview;
