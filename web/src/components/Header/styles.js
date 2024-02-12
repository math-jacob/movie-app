import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 3rem 12.4rem;

  display: flex;
  align-items: center;
  gap: 9.6rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_STROKE};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`

export const Profile = styled.button`
  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  gap: .8rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      width: max-content;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`