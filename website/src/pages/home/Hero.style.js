import styled from 'styled-components';

const HeroStyles = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;

  .image {
    overflow: hidden;
    width: 60%;
    max-height: 100vh;
  }

  .content {
    width: 40%;
    position: relative;
    padding: 5%;
    display: flex;
    align-items: space-between;
    justify-content: flex-end;
    flex-wrap: wrap;

    .bottom {
      width: 100%;
      display: flex;
      align-items: flex-end;

      .nav-bottom {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      nav {
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
        }

        a {
          font-size: 1.2rem;
          font-weight: bold;
          color: #606f7b;
          text-decoration: none;

          span {
            display: inline-block;
            margin-right: 4px;
          }

          svg {
            vertical-align: middle;
            max-width: 15px;
          }
        }
      }

      hr {
        width: 100%;
        background: #dae1e7;
        border: 0;
        height: 1px;
        margin-bottom: 24px;
      }
    }
  }
`;

export default HeroStyles;
