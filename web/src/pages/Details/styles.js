import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  overflow: hidden;

  .buttons-container {
    margin: 4rem 12.4rem 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > main {
    padding: 0 12.4rem 0;

    height: 74rem;
    overflow-y: auto;

    .header, .movie-info {
      margin-top: 2.4rem;
      display: flex;
      align-items: center;
    }

    .header h1 {
      margin-right: 1.6rem;
    }

    .movie-info {
      img {
        margin-right: .4rem;
      }

      span {
        margin-right: 1.6rem;
      }

      svg {
        margin-right: .4rem;
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    section {
      margin-block: 4rem;

      p {
        margin-top: 1.6rem;
        text-align: justify;
      }
    }
  }
`

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  > .filled {
    fill: ${({ theme }) => theme.COLORS.PINK_100};
  }
`

export const TagsWrapper = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  gap: .8rem;
`