import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled.footer`
  background: #0b1628;
  padding: 15px 0;
`;

export const DesignedBy = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  span {
    transform: translateY(3px);
    margin-right: 4px;
  }
`;

export const Developer = styled(Link)`
  color: #75b6c5;
  background: #15253c;
  padding: 4px;
  border-radius: 3px;
  transition: all .2s ease-in-out;
  &:hover {
    text-decoration: none;
    color: #15253c;
    background: #75b6c5;
  }
`;