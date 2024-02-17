import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  overflow: hidden;

  > button {
    margin: 4rem 0 0 12.4rem;
  }

  > main {
    padding: 0 12.4rem 0;

    height: 74rem;
    overflow-y: auto;

    .col-2 {
      margin-top: 2.4rem;
      display: flex;
      align-items: center;
      gap: 1.8rem;
    }

    .col-2:nth-child(3) {
      gap: .8rem;
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
      margin-top: 4rem;

      p {
        margin-top: 1.6rem;
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