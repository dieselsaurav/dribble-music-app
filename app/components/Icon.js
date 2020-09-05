import React from 'react';
import styled from 'styled-components/native';

import Images from '../images';

const Container = styled.View``;
const Image = styled.Image`
  height: ${(props) => props.size || '24px'};
  width: ${(props) => props.size || '24px'};
`;

function Icon({name, size}) {
  return (
    <Container>
      <Image source={Images.icons[name]} size={size} />
    </Container>
  );
}

export default Icon;
