import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > button {
    margin: 4rem 0 0 12.4rem;
  }
`

export const Form = styled.form`
  padding: 0 12.4rem 0;

  height: 84rem;
  overflow-y: auto;

  h1 {
    margin-top: 2.4rem;
    font-size: 3.6rem;
    font-weight: 500;
  }

  > .col-2 {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  textarea {
    margin-top: 4rem;
  }

  h2 {
    margin-top: 4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 2rem;
    font-weight: normal;
  }

  .tags-wrapper {
    margin-top: 2.4rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: .8rem;

    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  .col-2 button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`