import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.div`
  background: white;
  padding: 0.7em 0 0.7em 1.2em;
  position: fixed;
  top: 0;
  width: 100%;
  @media (min-width: 768px) {
    text-align: center;
  }
`

export const Logo = styled.img`
  height: 60px;
`

export const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 0;
  text-align: center;
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.7rem 1rem;
  width: 11rem;
  border: 2px solid black;
  font-size: 1em;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: color 0.4s ease 0s;
  background: ${(props) => (props.primary ? 'black' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  }
`

const ButtonA = styled.button`
  width: 100px;
  height: 100px;
  margin: 0.5em;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.5em;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
`

export const Button25 = styled(ButtonA)`
  background-color: #654f6f;
`

export const Button50 = styled(ButtonA)`
  background-color: #7576a5;
`

export const Button75 = styled(ButtonA)`
  background-color: #7ea16b;
`

export const Button100 = styled(ButtonA)`
  background-color: #eac419;
`

const Dot = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 2px;
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  padding: 4px;
`

export const Dot25 = styled(Dot)`
  background-color: #654f6f;
`

export const Dot50 = styled(Dot)`
  background-color: #7576a5;
`

export const Dot75 = styled(Dot)`
  background-color: #7ea16b;
`

export const Dot100 = styled(Dot)`
  background-color: #eac419;
`

export const FlexColumn = styled.div`
  margin: 8em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  max-width: 650px;
  text-align: center;
`

export const AppInfo = styled.div`
  text-align: center;
  margin: 8em 0 -5em;
`

export const Levels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LevelRow = styled.div`
  display: inline;
`

export const Form = styled.form`
  margin: 8em 0 1em;
  text-align: center;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4em;
`

export const Input = styled.input`
  background: transparent;
  outline: 0;
  border: 0;
  border-bottom: 1px solid gray;
  font-size: larger;
  width: 82%;
  max-width: 300px;
  box-sizing: border-box;
  padding: 0.7em;
  font-family: inherit;
  font-weight: inherit;
  :focus {
    outline: none;
  }
`

export const Label = styled.label`
  margin-top: 1.1em;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
  outline: none;
  &:hover {
    color: #5c5d8d;
  }
`
