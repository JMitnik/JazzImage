import styled from 'styled-components';

const Album = styled.div`
  display: block;
  position: relative;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  max-width: 300px;
  padding: 8px;
  text-align: left;
  transition-delay: 0s;
  transition-duration: 350ms;
  transition-property: all;
  background: white;
  transition-timing-function: ease;

  .image-container {
    border-radius: 7px;
    max-height: 200px;
    overflow: hidden;
  }

  .body {
    font-size: 0.9em;
    padding: 0 0.8em;

    .title {
      font-family: 'Lato' sans-serif;
      text-decoration: none;
      font-size: 1.2em;
      font-weight: 700;
      margin: 0.8em 0;
      color: #333;
    }
  }

  &:hover {
    box-shadow: rgba(0, 12, 32, 0.04) 0 0 1px 0,
      rgba(0, 12, 32, 0.04) 0 10px 16px 0;
  }

  img {
    height: auto;
    overflow: hidden;
    transition-delay: 0s;
    transition-duration: 200ms;
    transition-property: all;
    transition-timing-function: ease;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    max-height: 200px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const AlbumGalleryStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export default AlbumGalleryStyles;
export { Album };
