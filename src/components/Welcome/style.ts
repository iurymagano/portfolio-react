import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 1rem);
  
  img {
    width: 400px;
    margin-right: 6rem;

    border-radius:250px 250px 250px 250px;
    box-shadow: 1px 1px 10px 1px #ffffff;
    background: var(--roxo-600);

    animation: profile-effect 2s infinite alternate-reverse linear;


    @keyframes profile-effect {
      0% {
          box-shadow:  0px 6px 10px var(--roxo-600);
      }
      100% {
          box-shadow: 1px 1px 40px 1px var(--roxo-600);
          transform: rotate(-10deg);
      }
    }
  }

  h1 {
    font-size: 4rem;
    
  }

  span {
    font-size: 3rem;
    margin-top: 1rem;
    display: block;

    color: #ffffff;
    text-shadow: 10px 10px 10px var(--roxo-600);
  }
`;