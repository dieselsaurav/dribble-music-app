import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background: white;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 32px;
`;

const Text = styled.Text`
  color: black;
  font-weight: 700;
`;

function Button({text}) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
