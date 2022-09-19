import styled from '@emotion/styled';

const BannerContainer = styled.div`
  .image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: -1;
    img {
      opacity: 0.75;
      width: 100%;
      height: 100%;
      object-fit: covered;
    }
  }
`;

export default BannerContainer;
