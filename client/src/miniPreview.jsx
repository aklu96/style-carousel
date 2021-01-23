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

const MiniPreview = ({ itemCopy, selected }) => (
  <MinWrap>
    <Desc>
      <Description selected={selected} />
    </Desc>
    <Row>
      {itemCopy.map((style) => <MinItem style={style} selected={selected} />)}
    </Row>
  </MinWrap>
);

export default MiniPreview;
