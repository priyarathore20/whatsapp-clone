import styled from "styled-components";

export const MessageWrapper = styled.div`
width: 100vw;
height: 100%;
`

export const Avatar = styled.div`
border-radius: 50%;
width: 40px;
height: 40px;

img{
    width: 100%;
    height: 100%;
}
`

export const Username = styled.p`
color: #E9eDef;
font-size: 16px;
height: 21px;
width: 390px;
`

export const Chat = styled.div`
height: 740px;
width: 1044px;
background-color: #111b21;
`

export const Textfield = styled.div`
display: flex;
height: 60px;
width: 100%;
gap: 20px;

input{
    height: 50px;
    width: 510px;
    padding: 9px 12px;
    background-color: #2A3942;
}

svg{
    height: 50px;
    width: 50px;
    color: #fff;
}
`