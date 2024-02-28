import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  > main {
    height: 100vh;
    padding: 4.8rem 12.4rem 0;

    div:first-child {
      margin-bottom: 4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 3.2rem;
        font-weight: normal;
      }
      
      h1 + button {
        width: max-content;
      }
    }
  }

  overflow-y: hidden;
`

export const Content = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  scrollbar-gutter: stable;
  max-height: 60%;
  overflow-y: auto;
  padding-right: .8rem;
`

export const TagsWrapper = styled.div`
  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  flex-wrap: wrap;
`

export const SelectTagCard = styled.button`
  padding: 1.2rem 1.6rem;

  border: 0;
  border-radius: 1.6rem;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.PINK_100 : theme.COLORS.WHITE};

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.BLACK_200};
`