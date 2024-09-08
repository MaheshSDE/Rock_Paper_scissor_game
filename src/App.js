import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import './App.css'
import {
  AppContainer,
  ResultContainer,
  NameContainer,
  TextContent,
  ScoreContainer,
  ScoreTextContent,
  Score,
  RockScissorContainer,
  Container,
  Button,
  ImageElement,
  PopContainer,
  ResultViewContainer,
  ResultViewImageContainer,
  YourChoiceContainer,
  Content,
  OpponentChoiceContainer,
  PlayAgainContainer,
  StatusContent,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isResultView: false,
    yourChoice: '',
    opponentChoice: '',
    content: '',
    score: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  randomObject = yourId => {
    const listLength = choicesList.length
    const index = Math.floor(Math.random() * listLength)
    const object = choicesList[index]
    const {id, imageUrl} = object

    if (yourId === 'ROCK') {
      switch (id) {
        case 'PAPER':
          this.setState({content: 'YOU LOSE'})
          this.onDecrement()
          break
        case 'SCISSORS':
          this.setState({content: 'YOU WON'})
          this.onIncrement()
          break
        default:
          this.setState({content: 'IT IS DRAW'})
      }
    } else if (yourId === 'SCISSORS') {
      switch (id) {
        case 'ROCK':
          this.setState({content: 'YOU LOSE'})
          this.onDecrement()
          break
        case 'PAPER':
          this.setState({content: 'YOU WON'})
          this.onIncrement()
          break
        default:
          this.setState({content: 'IT IS DRAW'})
      }
    } else if (yourId === 'PAPER') {
      switch (id) {
        case 'SCISSORS':
          this.setState({content: 'YOU LOSE'})
          this.onDecrement()
          break
        case 'ROCK':
          this.setState({content: 'YOU WON'})
          this.onIncrement()
          break
        default:
          this.setState({content: 'IT IS DRAW'})
      }
    }

    this.setState({opponentChoice: imageUrl})
  }

  onClickRock = () => {
    const {id, imageUrl} = choicesList[0]
    this.randomObject(id)
    this.setState({isResultView: true, yourChoice: imageUrl})
  }

  onClickScissor = () => {
    const {id, imageUrl} = choicesList[1]
    this.randomObject(id)
    this.setState({isResultView: true, yourChoice: imageUrl})
  }

  onClickPaper = () => {
    const {id, imageUrl} = choicesList[2]
    this.randomObject(id)
    this.setState({isResultView: true, yourChoice: imageUrl})
  }

  onClickPlayAgain = () => {
    this.setState({
      isResultView: false,
      yourChoice: '',
      opponentChoice: '',
      content: '',
    })
  }

  render() {
    const {
      isResultView,
      yourChoice,
      opponentChoice,
      content,
      score,
    } = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <NameContainer>
            <TextContent>Rock Paper Scissors</TextContent>
            {/* <TextContent>PAPER</TextContent>
            <TextContent>SCISSORS</TextContent> */}
          </NameContainer>
          <ScoreContainer>
            <ScoreTextContent>Score</ScoreTextContent>
            <Score>{score}</Score>
          </ScoreContainer>
        </ResultContainer>
        {isResultView ? (
          <ResultViewContainer>
            <ResultViewImageContainer>
              <YourChoiceContainer>
                <Content>YOU</Content>
                <ImageElement src={yourChoice} alt="your choice" />
              </YourChoiceContainer>
              <OpponentChoiceContainer>
                <Content>OPPONENT</Content>
                <ImageElement src={opponentChoice} alt="opponent choice" />
              </OpponentChoiceContainer>
            </ResultViewImageContainer>
            <PlayAgainContainer>
              <StatusContent>{content}</StatusContent>
              <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
                PLAY AGAIN
              </PlayAgainButton>
            </PlayAgainContainer>
          </ResultViewContainer>
        ) : (
          <RockScissorContainer>
            <Container>
              <Button
                type="button"
                onClick={this.onClickRock}
                data-testid="rockButton"
              >
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                  className="rock-paper-scissor"
                  alt="ROCK"
                  key={choicesList[0].id}
                />
              </Button>
              <Button
                type="button"
                onClick={this.onClickScissor}
                data-testid="scissorsButton"
              >
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
                  className="rock-paper-scissor"
                  alt="SCISSORS"
                  key={choicesList[1].id}
                />
              </Button>
            </Container>
            <Button
              type="button"
              onClick={this.onClickPaper}
              data-testid="paperButton"
            >
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
                className="rock-paper-scissor"
                alt="PAPER"
                key={choicesList[2].id}
              />
            </Button>
          </RockScissorContainer>
        )}

        <PopContainer>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <button
                  type="button"
                  className="trigger-button-icon"
                  onClick={() => close()}
                >
                  <RiCloseLine className="icon" />.
                </button>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  className="rules-image"
                  alt="rules"
                />
              </div>
            )}
          </Popup>
        </PopContainer>
      </AppContainer>
    )
  }
}

export default App