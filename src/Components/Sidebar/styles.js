import styled from 'styled-components/macro';

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 30%;
  border-right: 1px solid #ccc;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.color.panelHeaderBackground};

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeaderIcon = styled.div`
  width: 24px;
  height: 24px;
  color: #aebac1;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 49px;
  width: 100%;
  padding: 0 8px;

  svg {
    color: #aebac1;
    width: 20px;
    vertical-align: middle;
    height: 20px;
    margin-right: 14px;
  }
`;
export const SearchInput = styled.div`
  background-color: ${({ theme }) => theme.color.panelHeaderBackground};
  border-radius: 8px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    color: #aebac1;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 14px;
  }

  input {
    color: white;
    position: relative;
    width: 100%;
    background-color: transparent;
    height: 32px;
    border-radius: 8px;
    padding: 10px;
    outline: none;
    border: none;
  }
`;
