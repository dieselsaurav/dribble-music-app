import React from 'react';
import styled from 'styled-components/native';

import Icon from './Icon';

const Container = styled.View`
  flex-direction: row;
  background: #323232;
  height: 36px;
  flex: 1;
  border-radius: 16px;
  padding: 0 8px;
  margin: 0 32px;
  align-items: center;
`;

const Input = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#A2A2A2',
}))`
  color: white;
  flex: 1;
`;

function SearhBox() {
  return (
    <Container>
      <Icon name="search" />
      <Input placeholder="Seach album, song, artist ..." />
    </Container>
  );
}

export default SearhBox;
