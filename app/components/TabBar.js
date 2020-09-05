import React from 'react';
import styled from 'styled-components/native';

import {BlurView} from '@react-native-community/blur';
import Icon from './Icon';

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const StyledBlurView = styled(BlurView)`
  height: 80px;
`;

const Content = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const IconWithText = styled.View`
  align-items: center;
  justify-content: center;
`;

const IconText = styled.Text`
  color: white;
`;

function TabBar() {
  return (
    <Container>
      <StyledBlurView
        blurRadius={25}
        blurAmount={3}
        overlayColor=""
        blurType="dark"
      />
      <Content>
        <IconWithText>
          <Icon name="discover" />
          <IconText>DISCOVER</IconText>
        </IconWithText>
        <IconWithText>
          <Icon name="music" />
          <IconText>ALBUMS</IconText>
        </IconWithText>
        <IconWithText>
          <Icon name="library" />
          <IconText>MY SONGS</IconText>
        </IconWithText>
        <IconWithText>
          <Icon name="person" />
          <IconText>PROFILE</IconText>
        </IconWithText>
      </Content>
    </Container>
  );
}

export default TabBar;
