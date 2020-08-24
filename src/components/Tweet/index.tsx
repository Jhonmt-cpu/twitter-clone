import React from 'react';

import { Container, Retweeted, RockeseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent , Icons, Status, CommentIcon, RetweetIcon, LikeIcon, } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockeseatIcon/>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar/>

        <Content>
          <Header>
            <strong>Rockeseat</strong>
            <span>@rocketseat</span>
            <Dot/>
            <time>23 de Agosto</time>
          </Header>

          <Description>Foquete não tem ré</Description>

          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>
            <Status>
              <RetweetIcon/>
              555
            </Status>
            <Status>
              <LikeIcon/>
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;