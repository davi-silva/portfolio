import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #0b1628;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 21px;
  margin-bottom: 25px;
  &::before {
    content: '';
    height: 17px;
    margin-right: 10px;
    width: 3px;
    display: inline-block;
    background: #75b6c5;
  }
  @media (max-width: 768px) {
    text-align: center;
    &::before {
      height: 3px;
      width: 17px;
      display:none;
    }
  }
`;

export const SubTitle = styled.h2`
  color: #75b6c5;
  font-size: 17px;
  flex: 0 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LanguagesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 100%;
  .left {
    margin-right: 5px;
  }
  .centerLeft {
    margin-left: 5px;
    margin-right: 5px;
  }
  .center {
    margin-left: 5px;
    margin-right: 5px;
  }
  .centerRight {
    margin-left: 5px;
    margin-right: 5px;
  }
  .right {
    margin-left: 5px;
  }
  @media (max-width: 991px) {
    flex: 0 100%;
  }
  @media (max-width: 768px) {
    .left {
      margin-right: 5px;
    }
    .centerLeft {
      margin-left: 5px;
      margin-right: 5px;
    }
    .center {
      margin-left: 5px;
      margin-right: 5px;
    }
    .centerRight {
      margin-left: 5px;
      margin-right: 5px;
    }
    .right {
      margin-left: 5px;
    }
  }
  @media (max-width: 486px) {
    .left {
      margin-right: 0;
    }
    .centerLeft {
      margin-left: 0;
      margin-right:0;
    }
    .center {
      margin-left: 0;
      margin-right:0;
    }
    .centerRight {
      margin-left: 0;
      margin-right:0;
    }
    .right {
      margin-left: 0;
    }
  }
`;

export const LanguageWrapper = styled.div`
  background: transparent;
  border-radius: 0px;
  padding: 15px;
  margin-bottom: 8px;
  margin-right: 7px;
  height: fit-content;
  border-radius: 4px;
  flex: 0 10.28%;
  transition: all .2s ease-in-out;
  &:hover {
    text-decoration: none;
    background: #15253c;
    h2 {
      color: #75b6c5;
    }
  }
  @media (max-width: 1199px) {
    flex: 0 10.141%;
  }
  @media (max-width: 991px) {
    flex: 0 18.9%;
  }
  @media (max-width: 768px) {
    flex: 0 22.99%;
  }
  @media (max-width: 540px) {
    flex: 0 22.99%;
  }
  @media (max-width: 534px) {
    flex: 0 22.99%;
  }
  @media (max-width: 498px) {
    flex: 0 30.84%;
  }
  @media (max-width: 486px) {
    flex: 0 47.4%;;
  }
  @media (max-width: 300px) {
    flex: 0 46.4%;;
  }
  @media (max-width: 272px) {
    flex: 0 100%;
  }
`;

export const Image = styled.img`
  height: 30px;
  width: 30px;
  display: table;
  margin: 0 auto;
`;

export const LanguageTitle = styled.h2`
  color: transparent;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 0;
  transition: all .2s ease-in-out;
`;