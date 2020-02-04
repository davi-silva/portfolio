import styled from 'styled-components';

import {
  rotate,
} from '../../../../animations/animations'

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

export const ReposDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  .left {
    margin-right: 7px;
  }
  .center {
      margin-left: 7px;
      margin-right:7px;
    }
  .right {
    margin-left: 7px;
  }
  @media (max-width: 768px) {
    .left {
      margin-right: 0;
    }
    .center {
      margin-left: 0;
      margin-right:0;
    }
    .right {
      margin-left: 0;
    }
  }
  @media (max-width: 486px) {
    .left {
      margin-right: 0;
    }
    .center {
      margin-left: 0;
      margin-right:0;
    }
    .right {
      margin-left: 0;
    }
  }
`;

export const RepoWrapper = styled.a`
  background: #15253c;
  border-radius: 0px;
  padding: 10px;
  margin-bottom: 15px;
  flex: 0 32.49%;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 1199px) {
    flex: 0 32.33%;
  }
  @media (max-width: 991px) {
    flex: 0 31.98%;
  }
  @media (max-width: 768px) {
    flex: 0 47.94%;
  }
  @media (max-width: 540px) {
    flex: 0 48.47%;
  }
  @media (max-width: 486px) {
    flex: 0 100%;
  }
`;

export const RepoName = styled.h2`
  color: #fff;
  font-size: 16px;
  margin-left: 25px;
`;

export const CreateAt = styled.span`
  color: #fff;
  font-size: 13px;
  &::before {
    content: '';
    height: 8px;
    margin-right: 5px;
    width: 1px;
    display: inline-block;
    background: #75b6c5;
  }
`;

export const GithubIcon = styled.a`
  color: #fff;
  font-size: 17px;
  position: absolute;
  transform: translateY(-4px);
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const Language = styled.strong`
  color: #75b6c5;
  font-size: 15px;
`;

export const LoadingDiv = styled.div`
  width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #fff;
		font-size: 22px;
		display: table;
		margin: 25px auto;
	}
`;