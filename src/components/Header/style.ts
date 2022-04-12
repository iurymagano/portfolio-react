import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  position: relative;

  .logo {
    font-size: 2rem;
    font-weight: bold;
  }

  strong {
    color: var(--roxo-600);
    font-size: 2.5rem;
  }

  a {
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    position: relative;
    
    &::after {
      content: "";
      position: absolute;
      background-color: var(--roxo-600);
      height: 5px;
      width: 0;
      left: 0;
      bottom: -10px;
      transition: 0.3s;
      border-radius: 5px;
    }
    
    &:hover::after {
      width: 100%;
    }

    & + a {
      margin-left: 2.5rem;
    }
  
    &:last-child {
      margin-right: 1rem;
    }
  }
  
`;