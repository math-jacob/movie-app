import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 22.6rem;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: none;
  border-radius: 10px;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  resize: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`