import styled from 'styled-components'

export const Appcontainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #25262c;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2%;
  font-family: Roboto;
`

export const Texteditor = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1b1c22;
  padding: 1%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`

export const TextContainer = styled.div`
  width: 50%;
`

export const EditContainer = styled.div`
  width: 50%;
  background-color: #25262c;
  border-radius: 10px;
  border: solid 1px #334155;
`

export const Heading = styled.h1`
  color: #f8fafc;
  text-align: center;
`

export const Image = styled.img`
  width: 60%;
  height: 60%;
  margin-left: 20%;
  margin-top: 6%;
`
export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

export const IconItem = styled.li`
  list-style: none;
`

export const Button = styled.button`
  background-color: transparent;
  color: #f1f5f9;
  font-size: 30px;
  border: none;
  margin: 2%;
  margin-top: 3%;
  color: ${props => props.textColor};
`
export const Line = styled.hr`
  border: solid 1px #334155;
  margin: 0px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  color: #black;
  background-color: transparent;
  border: none;
  color: #f8fafc;
  font-size: 20px;
  padding: 20px;
  outline: none;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
