import React from 'react';
import styled from 'styled-components';

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const ProdS = styled.span`
  display: flex;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: bold 900;
  font-size: 25px;
  line-height: 25px;
`;

const StyleInfo = styled.span`
display: flex;
position: relative;
font-family: 'Roboto', sans-serif;
font-weight: bold 900;
font-size: 23px;
line-height: 25px;
margin: 5px;
`;

const StyleAbr = styled.span`
display: flex;
position: relative;
font-family: 'Roboto', sans-serif;
font-weight: bold 900;
font-size: 15px;
line-height: 25px;
margin: 5px;
`;

const Description = ({ selected }) => {
  let { price, styleName, color, styleNo, abbreviation } = selected;
  abbreviation = (styleName + ' |').slice(0, 3).toUpperCase();
  return (
    <DescWrapper>
      <ProdS>
        <StyleInfo>{styleName}: {color}</StyleInfo>
      </ProdS>
      <ProdS>
      <StyleAbr>{abbreviation}</StyleAbr> <StyleAbr>StyleNo: {styleNo}</StyleAbr> <StyleAbr>${price}</StyleAbr>
      </ProdS>
    </DescWrapper>
  );
};

export default Description;
