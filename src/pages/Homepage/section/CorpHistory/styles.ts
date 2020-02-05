import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #0b1628;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 0 0;
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
      display: none;
    }
  }
`;

export const CorpsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  .left {
    margin-right: 15px;
  }
  .right {
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    .left {
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
    .right {
      margin-left: 0;
    }
  }
`;

export const CorpWrapper = styled.div`
  background: transparent;
  border-radius: 0px;
  padding: 10px 10px 10px 0px;
  margin-bottom: 15px;
  border-radius: 4px;
  flex: 0 20.65%;
  transition: all .2s ease-in-out;
  &:hover {
    text-decoration: none;
    padding: 10px;
    background: #15253c;
    h3 {
      &::after {
        width: 20px;
      }
    }
    b {
      color: #75b6c5;
    }
  }
  @media (max-width: 1199px) {
    flex: 0 24.141%;
  }
  @media (max-width: 991px) {
    flex: 0 30.7341%;
  }
  @media (max-width: 768px) {
    flex: 0 49%;
    padding: 0px 10px 10px 10px;
  }
  @media (max-width: 540px) {
    flex: 0 48.51%;
  }
  @media (max-width: 534px) {
    flex: 0 47.8%;
  }
  @media (max-width: 486px) {
    flex: 0 100%;
  }
`;

export const CompanyImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 70px;
  margin: 5px auto 0 auto;
  display: table;
  box-shadow: 0px 0px 13px -1px transparent;
  transition: all .2s ease-in-out;
`;


export const CompanyName = styled.h3`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-top: 15px;
  &::after {
    content: '';
    height: 2px;
    width: 0px;
    background: #75b6c5;
    display: table;
    margin: 0 auto;
    transition: all .2s ease-in-out;
  }
`;

export const CompanyPosition = styled.b`
  font-size: 18px;
  color: transparent;
  margin: 5px auto 0 auto;
  display: table;
  margin-top: 15px;
  transition: all .2s ease-in-out;

`;
