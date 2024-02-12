import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 10px;
  margin-bottom: .8rem;

  > input {
    width: 100%;
    background: transparent;
    border: none;

    height: 5.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`