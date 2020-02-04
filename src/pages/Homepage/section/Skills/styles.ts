import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #0b1628;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 15px 0;
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

export const SkillsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const SkillWrapper = styled.div`
  background: #15253c;
  border-radius: 0px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  flex: 0 19.28%;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 1199px) {
    flex: 0 19.141%;
  }
  @media (max-width: 991px) {
    flex: 0 23.7341%;
  }
  @media (max-width: 768px) {
    flex: 0 31.7%;
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

export const SkillTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;