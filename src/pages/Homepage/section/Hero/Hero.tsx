import React from 'react'

import {
  FaSortDown,
} from 'react-icons/fa';

import {
  Wrapper,
  ArrowDown,
  Headline,
  Brand,
  Languages,
  Sep,
} from './styles';

const Hero: React.FC = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Headline>
              Full Stack Engineer
            </Headline>
            <Brand>
              Davi Silva
            </Brand>
            <Languages>
              English <Sep>|</Sep> Portuguese <Sep>|</Sep> Spanish
            </Languages>
          </div>
          <div className="col-12">
            <ArrowDown>
              <FaSortDown />
            </ArrowDown>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero
