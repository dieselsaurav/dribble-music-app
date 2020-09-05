import React from 'react';
import styled from 'styled-components/native';

import NavBar from './components/NavBar';
import BigCard from './components/BigCard';
import Button from './components/Button';
import PlaylistCard from './components/PlaylistCard';
import TabBar from './components/TabBar';

const StatusBar = styled.StatusBar.attrs(() => ({
  backgroundColor: 'black',
}))``;

const Container = styled.ScrollView`
  flex: 1;
  background: black;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

const HorizontalScrollView = styled.ScrollView``;
const VerticalScrollView = styled.ScrollView`
  flex-grow: 1;
  margin-bottom: 80px;
`;
const HorizontalRow = styled.View`
  flex-direction: row;
`;

function App() {
  return (
    <>
      <StatusBar />
      <Container>
        <NavBar />
        <TitleContainer>
          <Title>Hot Recommended</Title>
        </TitleContainer>
        <HorizontalScrollView horizontal={true}>
          <BigCard
            song="Sound Of Water"
            album="Denise Brewer"
            albumArt="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
          />
          <BigCard
            song="Sound Of Water"
            album="Denise Brewer"
            albumArt="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
          />
          <BigCard
            song="Sound Of Water"
            album="Denise Brewer"
            albumArt="https://lh3.googleusercontent.com/proxy/rpjeGGiaKHskCPlcqZArNndX1172pqK-OAA8iJEB26GOCeNWNQzZxozmgxdOzWNHt10KRonCZhpI2EeYjGwoqgS6Av6Dsy0TI-VQZHB-4-1eE0YpScWPdpmREOr8uQN89A"
          />
        </HorizontalScrollView>
        <TitleContainer>
          <Title>Hot Playlist</Title>
          <Button text="View All" />
        </TitleContainer>
        <VerticalScrollView>
          <HorizontalRow>
            <PlaylistCard
              name="My Classic List"
              likes={235}
              tracks={30}
              albumArt="https://lh3.googleusercontent.com/proxy/rpjeGGiaKHskCPlcqZArNndX1172pqK-OAA8iJEB26GOCeNWNQzZxozmgxdOzWNHt10KRonCZhpI2EeYjGwoqgS6Av6Dsy0TI-VQZHB-4-1eE0YpScWPdpmREOr8uQN89A"
            />
            <PlaylistCard
              name="My Classic List"
              likes={235}
              tracks={30}
              albumArt="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
            />
          </HorizontalRow>
          <HorizontalRow>
            <PlaylistCard
              name="My Classic List"
              likes={235}
              tracks={30}
              albumArt="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
            />
            <PlaylistCard
              name="My Classic List"
              likes={235}
              tracks={30}
              albumArt="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
            />
          </HorizontalRow>
        </VerticalScrollView>
      </Container>
      <TabBar />
    </>
  );
}

export default App;
