import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body,} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta"
            elements={[
              <FollowSuggestion 
                name="Venâncio Alves"
                nickname="@venancio_alves"
              />,
              <FollowSuggestion 
                name="José David"
                nickname="@jose_david"
              />,
              <FollowSuggestion 
                name="Gabriel Gimenes"
                nickname="@gabriel_gimenes"
              />,
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
          <List 
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;