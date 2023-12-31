import styled from "styled-components/macro";

export const LoginPage = styled.div`
  background-color: #111b21;
  width: 100%;
  height: 100vh;
  position: relative;

  .login-navbar {
    background-color: #00a884;
    position: absolute;
    width: 100%;
    height: 222px;
  }

  img {
    height: 39px;
    width: 39px;
    fill: #00e676;
    color: white;
    outline: #fff;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 10;

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 27px 98px 28px;
  }

  .logo-title {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    margin-left: 14px;
  }
`;

export const LoginWindow = styled.div`
  background-color: #fff;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;

  .login-window-details {
    padding: 60px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /* height: 100%; */
  }

  .number-title {
    font-size: 28px;
    margin-bottom: 10px;
    color: #415258;
  }

  .number-para {
    font-size: 16px;
    color: #8696a0;
  }

  .flag-img {
    height: 20px;
    width: 20px;
  }

  .flag-name {
    margin-left: 14px;
    font-size: 17px;
    color: #111b21;
  }

  .number-btn {
    padding: 14px 10px 15px 26px;
    border: #e9edef 1px solid;
    background-color: white;
    width: 291px;
    height: 51px;
    border-radius: 4px;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
  }

  .number {
    padding: 14px 10px 15px 26px;
    border: #e9edef 1px solid;
    background-color: white;
    width: 291px;
    height: 51px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 4px;
  }

  .number-input {
    outline: none;
    border: none;
    margin-left: 14px;
  }

  .login-btn {
    padding: 10px 24px;
    background-color: #008069;
    color: #fff;
    font-size: 14px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .login-link{
    cursor: pointer;
    color: #008069;
  }
`;

export const LoginTutorial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 200px;

  .login-tutorial-heading {
    color: #415258;
    font-size: 28px;
    margin: 0px 0px 16px;
  }

  .tutorial-link {
    text-decoration: none;
    font-size: 14px;
    color: #008069;
  }
`;
