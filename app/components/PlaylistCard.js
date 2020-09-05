import React from 'react';
import styled from 'styled-components/native';

import Icon from './Icon';

const Container = styled.View`
  width: 160px;
  margin: 16px;
`;
const AlbumArt = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Name = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Caption = styled.Text`
  color: white;
  font-size: 14px;
  padding: 8px;
`;

const CaptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

function PlaylistCard({albumArt, name, likes, tracks}) {
  return (
    <Container>
      <AlbumArt source={{uri: albumArt}} />
      <Name>{name}</Name>
      <Row>
        <CaptionContainer>
          <Icon name="likes" size="18px" />
          <Caption>{likes}</Caption>
        </CaptionContainer>
        <CaptionContainer>
          <Icon name="tracks" size="18px" />
          <Caption>{tracks} tracks</Caption>
        </CaptionContainer>
      </Row>
    </Container>
  );
}

export default PlaylistCard;
