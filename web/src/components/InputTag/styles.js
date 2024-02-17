import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1.6rem;
  background-color: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.INPUT_BACKGROUND};

  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : 'none'};
  border-radius: 1rem;

  display: flex;
  align-items: center;

  button, input {
    border: none;
    background: transparent;
  }

  input {
    width: 14rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: inline;
  }

  svg {
    size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    cursor: pointer;
  }
`