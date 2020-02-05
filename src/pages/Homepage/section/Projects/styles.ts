import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  background: #0b1628;
  padding: 20px 0;
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

export const LinkToProject = styled(Link)`
  background: #0b1628;
  border-radius: 6px;
  display: flex;
  color: unset;
  margin-bottom: 10px;
  padding: 15px 15px 15px 0;
  transition: all .25s ease-in-out;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
  &:hover {
    color: unset;
    text-decoration: none;
    background: #15253c;
    padding: 15px;
    div {
      filter: grayscale(0%);
    }
  }
`;

export const Div = styled.div`
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  color: #fff;
  font-weight: 900;
  width: 300px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  filter: grayscale(100%);
  transition: all .2s ease-in-out;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const Position = styled.h3`
  color: #75b6c5;
  font-size: 18px;
  font-weight: 900;
  @media (max-width: 991px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 15px;
    font-size: 18px;
  }
`;

export const ProjectName = styled.h2`
  color: #fff;
  font-size: 27px;
  @media (max-width: 991px) {
    font-size: 23px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProjectDescription = styled.p`
  color: #fff;
  font-size: 16px;
  /* max-width: 500px; */
  margin-bottom: 0px;
  @media (max-width: 991px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const TechUsed = styled.p`
  color: #75b6c5;
  font-size: 14px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;