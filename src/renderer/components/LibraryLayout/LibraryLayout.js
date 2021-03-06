import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router';
import Sidebar from './Sidebar/Sidebar';
import PlayerControls from './PlayerControls/PlayerControls';
import Content from './Content/Content';
import Library from './Sidebar/Sections/Library';
import Playlists from './Sidebar/Sections/Playlists';
import ContentWrap from './Content/ContentWrap';

const LayoutWrap = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  overflow-y: scroll;
  cursor: default;

  display: flex;
  width: 100vw;
  height: 100vh;

  & ${Sidebar} {
    width: 260px;
  }

  & ${ContentWrap} {
    padding-bottom: 48px;
  }

  & ${PlayerControls} {
    position: fixed;
    border-top: 1px solid #313d49;
    bottom: 0;
    z-index: 10;
  }
`;

const LibraryLayout = () => {
  return (
    <MemoryRouter>
      <LayoutWrap>
        <Sidebar>
          <Library />
          <Playlists />
        </Sidebar>
        <Content />
        <PlayerControls />
      </LayoutWrap>
    </MemoryRouter>
  );
};

export default LibraryLayout;
