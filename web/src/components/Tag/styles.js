import styled from "styled-components";

export const Container = styled.span`
  margin: 0;
  padding: .5rem 1.6rem;
  border: .8rem;

  background-color: ${({ theme }) => theme.COLORS.TAG_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.2rem;
`