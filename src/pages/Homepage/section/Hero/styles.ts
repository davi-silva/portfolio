import styled from 'styled-components';
import {
  floating
} from '../../../../animations/animations';

export const Wrapper = styled.div`
  background: #0b1628;
  padding: 20px 0 10px 0;
`;


export const Headline = styled.h2`
  font-size: 20px;
  color: #75b6c5;
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 530px) {
    font-size: 16px;
  }
  @media (max-width: 420px) {
    font-size: 15px;
  }
`;

export const Brand = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  @media (max-width: 991px) {
    font-size: 45px;
  }
  @media (max-width: 768px) {
    font-size: 43px;
  }
  @media (max-width: 530px) {
    font-size: 38px;
  }
  @media (max-width: 420px) {
    font-size: 34px;
  }
`;

export const Languages = styled.h4`
  color: #fff;
  font-weight: 100;
  font-size: 15px;
  @media (max-width: 530px) {
    font-size: 14px;
  }
  @media (max-width: 420px) {
    font-size: 13px;
  }
`;

export const Sep = styled.span`
  color: #75b6c5;
  font-weight: 100;
  font-size: 12px;
  @media (max-width: 530px) {
    font-size: 11px;
  }
  @media (max-width: 420px) {
    font-size: 9px;
  }
`;

export const ArrowDown = styled.div`
  justify-content: center;
  display: flex;
  animation: ${floating} 1.5s ease-in-out infinite;
  svg {
    color: #fff;
    font-size: 20px;
  }
`;

export const DownloadResume = styled.a`
  color: #fff;
  background: #15253c;
  padding: 8px 18px;
  font-size: 24px;
  border-radius: 5px;
  margin: 26px auto 0 auto;
  display: table;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    font-size: 21px;
    margin: 26px auto 15px auto;
  }
  @media (max-width: 372px) {
    font-size: 19px;
  }
`;
