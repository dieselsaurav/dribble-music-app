import React from 'react';
import styled from 'styled-components/native';

import Images from '../images';
import SearchBox from './SearchBox';

import Icon from './Icon';

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 8px 16px;
  justify-content: space-between;
`;
const Avatar = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;

function NavBar() {
  return (
    <Container>
      <Icon name="ham" />
      <SearchBox />
      <Avatar source={Images.placeholders.avatar} />
    </Container>
  );
}

export default NavBar;
