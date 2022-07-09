import React from 'react';
import styled from 'styled-components';
import { FaBookReader } from 'react-icons/fa';
import { musicSide } from '../../Home/UtilsComponents/CommonTrend';
import Music from '../../Home/UtilsComponents/SidePostPreview';
import SearchForm from '../../SideBars/SearchForm';
import ImageGrid from '../../SideBars/Components/ImageGrid';
import Instagram from '../../SideBars/Components/Instagram';

function Sidebar() {
  return (
    <Container>
      <div className="right-post-side flex column">
        <SearchForm />
        <Music
          title="Latest article"
          genre="Music"
          icon={<FaBookReader />}
          trendArr={musicSide}
        />

        <Instagram />
        <ImageGrid />
      </div>
    </Container>
  );
}

export default Sidebar;
const Container = styled.div`
  .right-post-side {
    gap: 2rem;
    margin-top: 90px;
  }
`;
