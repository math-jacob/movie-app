import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  padding: 1.6rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  margin-top: 1.6rem;
  color: ${({ theme }) => theme.COLORS.BLACK_100};
  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  border: none;
  border-radius: 1rem;

  font-weight: 500;
`;