import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

//make a media query here for Header, when burger menu show, logo to the left instead
export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: 10px 10px 40px 10px;
`

export const Logo = styled.img`
  height: 60px;
`

export const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
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
  font-family: 'Raleway';
  font-weight: 600;
  transition: color 0.4s ease 0s;
  background: ${(props) => (props.primary ? 'black' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  &:hover {
    background: ${(props) => (props.primary ? 'transparent' : 'black')};
    color: ${(props) => (props.primary ? 'black' : 'white')};
  }
`

// export const Button = styled.button`
//   background: transparent;
//   border: black solid 1px;
//   padding: 10px 25px;
//   margin: 20px 10px;
//   font-size: 0.8em;
//   border-radius: 21px;
// `

const ButtonA = styled.button`
  width: 100px;
  height: 100px;
  margin: 10px;
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

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppInfo = styled.div`
  text-align: center;
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
  margin: 50px 0 20px;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
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
  padding: 0.7em 0;
  font-family: inherit;
  font-weight: inherit;
  :focus {
    outline: none;
  }
`

export const Label = styled.label`
  margin-top: 20px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #5c5d8d;
  }
`
