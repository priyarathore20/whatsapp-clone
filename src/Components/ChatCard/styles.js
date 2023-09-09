import styled from "styled-components";

export const ChatCardWrapper = styled.div`
  height: 72px;
  padding: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ChatCardAvatar = styled.div`
  height: 77px;
  width: 73px;
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
  width: 310px;
`;
export const ContactName = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  height: 22px;
`;

export const Message = styled.p`
  font-size: 14px;
  height: 20px;
  color: #fff;
  margin-top: 4px;
`;
export const TimeStamp = styled.p`
  height: 16px;
  width: 43px;
  color: #00a884;
  font-size: 12px;
  margin-right: 8px;
  padding-top: 5px;
  vertical-align: middle;
`;
