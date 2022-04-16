import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;


export const Content = styled.div`

  .titulo_projetos {
    text-align: center;
    margin: 5rem 0;
    font-size: 3rem;
  }

  .content-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    
    
  }
    .card {
      width: 360px;
      height: 487px;
      background: #32323232;
      border-radius: 8px;
      filter: brightness(0.7);
      

      &:hover {
        filter: brightness(1);
        transition: 1s;
      }
        &:hover img {
          transform: scale(1.1);
          transition: 1s;
          
    }
      
      .white {
        background: var(--roxo-600);
        height: 127px;
        width: 100%;
        border-radius: 8px;
      }

      .container-card {
        max-width: 330px;
        margin: 0 auto;
      
        img {
          width: 327px;
          height: 188px;
          margin-top: -5.5rem;
          border-radius: 8.47px;
          box-shadow: 2px 2px 5px 1px #1a1a1a;

        }
        
        h1 {
          font-size: 2rem;
          color: #ffffffff;
          text-shadow: 1px 1px 1px #32323232;
          margin-top: 1rem;
        }
        
        p {
          margin-top: 1rem;
          font-size: 1rem;
        }

        .tecnologias {
          display: flex;
          margin-top: 1.5rem;
          
          text-align: 1px 1px 1px #fff;
          cursor: pointer;
          transition: 1s;
          
        }
        span {
          color: #6020df;
          font-weight: bold;

          &:hover {
            color: #fff;
          }

          & + span {
            margin-left: 10px;
          }
        }
        .buttons {
          a {
            text-decoration: none;
            color: #ffffff;
            background: transparent;
            border: 1px solid #ffffff;
            margin-top: 20px;
            display: inline-block;
            padding: 0.8rem;
            border-radius: 0.5rem;
            

            & + a {
              margin-left: 1rem;
            }

            &:hover {
              background: var(--roxo-600);
            }

          }
        }
      }
    }

    @media (max-width: 426px) {
      .titulo_projetos {
        font-size: 2rem;
      }

      .card {
        width: 320px;
      }

      .text {
        padding: 1rem;
      }

    }
`;