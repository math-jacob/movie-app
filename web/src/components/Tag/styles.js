import styled from "styled-components";

export const Container = styled.span`
  margin: 0;
  padding: .8rem 1.6rem;

  border-radius: .8rem;

  background-color: ${({ theme, $details }) => $details ? theme.COLORS.PINK_700 : theme.COLORS.TAG_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.2rem;
`