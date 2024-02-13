import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  > header {
    padding: 6.4rem 14.6rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_800};

    a {
      color: ${({ theme }) => theme.COLORS.PINK_100};

      display: flex;
      align-items: center;
      gap: .8rem;
    }
  }
`

export const Form = styled.form`
  max-width: 33rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:nth-child(3) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
  margin: -8rem 0 6.4rem 0;

  width: max-content;
  position: relative;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};

    position: absolute;
    right: 1rem;
    bottom: .6rem;

    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.COLORS.BLACK_100};
    }

    > input {
      display: none;
    }
  }
`