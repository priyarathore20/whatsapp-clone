import styled from "styled-components/macro";

export const Chatpage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 6px solid #00A884;
`

export const ChatpageImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  height: 389px;

  img {
    width: 320px;
    height: 200px;
  }

button{
  width: 124px;
  height: 36px;
  background-color: #00A884;
  color: ${({darkTheme}) => darkTheme?.color?.body};
  padding: 10px 24px;
  font-size: 14px;
  border: none;
  border-radius: 24px;
  margin-top: 32px ;
}
`

export const DownloadHead = styled.p`
  color: #e9edefe0;
  font-size: 32px;
  margin: 28px 0 0;
`;

export const DownloadPara = styled.p`
  color: #8696a0;
  font-size: 14px;
  margin: 18px 0 0;
  text-align: center;
`;

export const Encryption = styled.div`
display: none;
width: 100%;
height: 15px;

p{
  height: 14px;
  color: #667781;
  
}
`