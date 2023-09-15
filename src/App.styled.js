
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, S Geneva, Verdana, sans-serif;
  }
  
`

export const Loader = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
overflow: hidden;
background-color: #111b21;

img{
  height: 50%;
  width: 50%;
}
`