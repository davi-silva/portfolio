import React from 'react'

import {
  Wrapper,
} from './styles'

import {
  DesignedBy,
  Developer,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <DesignedBy>
        <span>
          Developed by
        </span>
        {' '}
        <Developer to="//github.com/Davi-Silva" target="_blank">
          Davi Silva
        </Developer>
      </DesignedBy>
    </Wrapper>
  )
}

export default Footer;