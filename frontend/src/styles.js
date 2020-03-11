import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
export const Logo = styled.img`
  height: 60px;
`
// export const Button = styled.button`
//   border-radius: 50px;
//   background: linear-gradient(225deg, #f0c2cf, #caa3ae);
//   box-shadow: -20px 20px 51px #b3919a, 20px -20px 51px #ffd9e8;
// `

//tried a lighter color
export const Button = styled.button`
  background: transparent;
  border: black solid 1px;
  padding: 10px 25px;
  margin: 20px 10px;
  font-size: 0.8em;
  border-radius: 21px;
`
// background: linear-gradient(145deg, #f0e7ec, #cac2c7);
//   box-shadow: 7px 7px 14px #c5bec2, -7px -7px 14px #fbf2f8;

const ButtonA = styled.button`
  width: 50px;
  height: 50px;
  margin: 20px 10px;
  font-size: 0.8em;
  border: none;
  border-radius: 50px;
  color: white;
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

export const AppInfo = styled.div`
  text-align: center;
`

export const Levels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
