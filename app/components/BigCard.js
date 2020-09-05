import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 320px;
  margin: 16px;
`;

const AlbumArt = styled.Image`
  width: 320px;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const SongName = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const AlbumName = styled.Text`
  color: white;
  font-size: 14px;
`;

function BigCard({albumArt, song, album}) {
  return (
    <Container>
      <AlbumArt source={{uri: albumArt}} />
      <SongName>{song}</SongName>
      <AlbumName>{album}</AlbumName>
    </Container>
  );
}

export default BigCard;
