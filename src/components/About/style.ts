import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 5rem auto;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5rem;
  }    

  .about-box {
    background: #32323232;
    padding: 5rem;
    border-radius: 1rem 3rem;
    position: relative;
    overflow: hidden;

    p {
      font-size: 1.5rem;
      text-align: justify;
      position: relative;
      z-index: 10;
    }

    &::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 1000px;
    top: -300px;
    left: 300px;
    background: var(--roxo-600) ;
    animation: border-animate 4s linear infinite;
    border-radius: 0 5rem;

    }

    &::after {
    content: "";
    position: absolute;
    inset: 4px;
    background: #111111;
    border-radius: 0 5rem;
    }

    @keyframes border-animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(350deg);
    }
  }
}

@media (max-width: 426px) {
  margin: 0;
  h1 {
    padding: 0;
    font-size: 2rem;
  }

  .about-box {
    padding: 2.2rem;
    p {
      font-size: 1rem;
    }
  }

}


`;