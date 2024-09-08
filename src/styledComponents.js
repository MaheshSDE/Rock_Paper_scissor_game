import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #223a5f;
  padding: 20px;
`
export const ResultContainer = styled.div`
  height: 15vh;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 20vh;
  }
`
export const NameContainer = styled.div`
  height: 70px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const TextContent = styled.h1`
  font-family: 'Bree Serif';
  font-size: 15px;
  font-weight: 450;
  color: #ffffff;
  width: 10px;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  width: 40%;
  height: 13vh;
  padding: 10px;
  @media screen and (min-width: 768px) {
    height: 17vh;
    width: 30%;
  }
`
export const ScoreTextContent = styled.p`
  font-family: 'Bree Serif';
  font-size: 15px;
  font-weight: bold;
  color: #223a5f;
`

export const Score = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  color: #223a5f;
`
export const RockScissorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ImageElement = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 120px;
    width: 120px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  margin-right: 5px;
  margin-left: 5px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const PopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ResultViewImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`
export const YourChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Content = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`

export const OpponentChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StatusContent = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 450;
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  font-family: 'Bree Serif';
  font-size: 12px;
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 35px;
  width: 80px;
  cursor: pointer;
  outline: none;
`