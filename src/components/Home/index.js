import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Appcontainer,
  Texteditor,
  TextContainer,
  EditContainer,
  Heading,
  Image,
  IconsContainer,
  IconItem,
  Button,
  Line,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  boldClicked = () => {
    this.setState(Prev => ({isBold: !Prev.isBold}))
  }

  italicClicked = () => {
    this.setState(Prev => ({isItalic: !Prev.isItalic}))
  }

  underlineClicked = () => {
    this.setState(Prev => ({isUnderline: !Prev.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <Appcontainer>
        <Texteditor>
          <TextContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextContainer>
          <EditContainer>
            <IconsContainer>
              <IconItem>
                <Button
                  data-testid="bold"
                  type="button"
                  textColor={boldLogo}
                  onClick={this.boldClicked}
                >
                  <VscBold />
                </Button>
              </IconItem>
              <IconItem>
                <Button
                  data-testid="italic"
                  type="button"
                  textColor={italicLogo}
                  onClick={this.italicClicked}
                >
                  <GoItalic />
                </Button>
              </IconItem>
              <IconItem>
                <Button
                  data-testid="underline"
                  type="button"
                  textColor={underlineLogo}
                  onClick={this.underlineClicked}
                >
                  <AiOutlineUnderline />
                </Button>
              </IconItem>
            </IconsContainer>

            <Line />
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </EditContainer>
        </Texteditor>
      </Appcontainer>
    )
  }
}

export default Home
