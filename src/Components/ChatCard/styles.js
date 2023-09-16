import styled from 'styled-components/macro';

export const ChatCardWrapper = styled.div`
  height: 72px;
  padding: 10px 0px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ChatCardAvatar = styled.div`
  padding: 0px 15px 0px 13px;

  img {
    height: 49px;
    width: 49px;
    vertical-align: middle;
    border-radius: 50%;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;
export const ContactName = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #fff;
  margin-top: 4px;
`;
export const TimeStamp = styled.p`
  color: #00a884;
  font-size: 12px;
  margin-right: 8px;
  padding-top: 5px;
  vertical-align: middle;
  white-space: nowrap;
`;
