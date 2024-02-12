import styled from 'styled-components'

import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.4rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: -10rem;
  
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 4.8rem;
    font-weight: bold;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }

  > h2 {
    margin: 4.8rem;
    font-size: 2.4rem;
    font-weight: medium;
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK_100};

    display: flex;
    align-items: center;
    gap: .8rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`