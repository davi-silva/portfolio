import React from 'react'

import {
  Wrapper,
  Title,
  SkillsDiv,
  SkillWrapper,
  SkillTitle,
} from './styles';

const Skills = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>
              Main Skills
            </Title>
            <SkillsDiv>
              <SkillWrapper className="left">
                <SkillTitle>
                  MERN Stack
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="centerLeft">
                <SkillTitle>
                  Blockchain Development
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="center">
                <SkillTitle>
                  eCommerce
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="centerRight">
                <SkillTitle>
                  Business Growth Strategy
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="right">
                <SkillTitle>
                  Stocks and Crypto Investing
                </SkillTitle>
              </SkillWrapper>
            </SkillsDiv>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Skills
