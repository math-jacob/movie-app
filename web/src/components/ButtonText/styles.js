import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK_100};

  font-size: 1.6rem;

  display: flex;
  align-items: center;
  gap: .8rem;
`