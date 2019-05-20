import styled from 'styled-components';

const GalleryStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 350px;
  grid-auto-rows: 250px;
  grid-gap: 50px;
  padding: 100px 0;

  .gatsby-image-wrapper {
    height: 100%;
  }

  .image-wrapper {
    display: block;
    overflow: hidden;
    max-width: 100%;
    box-shadow: none;
    grid-column: span 2;

    &:nth-child(1) {
      grid-column: span 3;
    }

    &:nth-child(2) {
      grid-column: span 3;
    }

    &:hover {
      cursor: pointer;
      transition: all 2s ease-in;
      box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
    }
  }
`;

export default GalleryStyles;
