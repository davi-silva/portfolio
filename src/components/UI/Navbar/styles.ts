import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
  background: #0b1628;
  flex-direction: row;
  align-content: flex-end;
  padding: 15px 0;
`;

export const SocialMediaUL = styled.ul`
  color: #fff;
  float: right;
  margin-bottom: 0;
  li {
    list-style: none;
    display: inline-flex;
    margin-left: 17px;
  }
`;

export const LinkTo = styled(Link)`
  color: #fff;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  svg {
    font-size: 25px;
    filter: drop-shadow( 0px 1px 2px rgba(102, 158, 171, .7));
  }
`;
