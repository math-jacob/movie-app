import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 3.2rem;

  border: 0;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_800};

  display: flex;
  flex-direction: column;
  align-items: start;

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: .8rem;
  }

  > p {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: left;
  }
`

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > .filled {
    fill: ${({ theme }) => theme.COLORS.PINK_100};
  }
`

export const Tags = styled.div`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  gap: .8rem;
`