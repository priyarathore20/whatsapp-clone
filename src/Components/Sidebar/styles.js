import styled from "styled-components/macro";

export const SidebarWrapper = styled.div`
  width: 447px;
  height: 739px;
  border-right: 1px solid #ccc;
  `

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 16px;

  img{
    height: 40px;
  width: 40px;
  border-radius: 50%;
  }
`

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: right;
  gap: 14px;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const HeaderIcon = styled.div`
  width: 24px;
  height: 24px;
  color: #aebac1;

  svg{
    height: 100%;
    width: 100%;
  }
`

export const SearchInput = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111b21;
  height: 49px;
  width: 100%;
  padding: 0 8px;

input{
  position: relative;
  width: 340px;
  background-color: ${({darkTheme}) => darkTheme?.color.font};
  height: 32px;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  border: none;
}

svg{
  color: #aebac1;
  width: 20px;
  vertical-align: middle;
  height: 20px;
  margin-right: 14px;
}
`