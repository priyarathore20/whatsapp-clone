import styled from 'styled-components/macro';

export const MessageWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Username = styled.p`
  color: #e9edef;
  font-size: 16px;
  height: 21px;
  /* width: 390px; */
`;

export const Chat = styled.div`
  flex: 1;
  width: 100%;
  background-color: #111b21;
`;

export const Messenger = styled.p`
  background-color: #005c4b;
  height: 100%;
  width: 100%;
  padding: 6px 7px 8px 9px;
  font-size: 14px;
  color: #e9edef;
  border-radius: 6px;
`;

export const Textfield = styled.form`
  display: flex;
  height: 60px;
  width: 100%;
  gap: 20px;

  input {
    height: 50px;
    width: 100%;
    padding: 9px 12px;
    background-color: #2a3942;
  }

  svg {
    height: 50px;
    width: 50px;
    color: #fff;
  }
`;
