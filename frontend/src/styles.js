import styled from 'styled-components/macro'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
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
  width: 100px;
  height: 30px;
  margin: 10px;
  font-size: 0.9em;
  border: none;
  border-radius: 21px;
  background: linear-gradient(145deg, #f0e7ec, #cac2c7);
  box-shadow: 7px 7px 14px #c5bec2, -7px -7px 14px #fbf2f8;
`
export const AppInfo = styled.div`
  text-align: center;
  font-size: 1.3em;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
